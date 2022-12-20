var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Account = /** @class */ (function () {
    function Account(accountUsername, accountEmail, accountPassword, balancInit, date, interest) {
        this.accountUsername = accountUsername;
        this.accountEmail = accountEmail;
        this.accountPassword = accountPassword;
        this.balancInit = balancInit;
        this.date = new Date(date);
        this.interest = interest;
    }
    Account.prototype.oneDeposit = function (deposit) {
        return this.balancInit += deposit;
    };
    Account.prototype.oneWithDraw = function (draw) {
        return (this.balancInit >= draw) ? this.balancInit -= draw : 0;
    };
    Account.prototype.creationCard = function () {
        var div = document.createElement('div');
        var accountSection = document.querySelector('#account-section');
        div.innerHTML = "<h3>".concat(this.accountUsername, "</h3>\n        <p>").concat(this.accountEmail, "</p>");
        Account.extendedCard(div, this);
        accountSection.append(div);
    };
    Account.extendedCard = function (cont, obj) {
        cont.addEventListener("click", function () {
            var accountSection = document.querySelector('#account-section');
            accountSection.innerHTML = '';
            var div = document.createElement('div');
            div.innerHTML = "<div><h3>".concat(obj.accountUsername, "</h3>\n            <p>").concat(obj.accountEmail, "</p>\n            <p>").concat(obj.balancInit, " $</p>\n            <p>").concat(obj.date, "</p></div>\n            <div><button class=\"deposita\">Deposita 100$</button><button class=\"ritira\">Ritira 100$</button></div>");
            accountSection.append(div);
            Account.acctiveButton(obj);
        });
    };
    Account.acctiveButton = function (obj) {
        var puls = document.querySelectorAll("button");
        puls[0].addEventListener("click", function () {
            console.log("Il saldo è", obj.oneDeposit(100));
        });
        puls[1].addEventListener("click", function () {
            console.log((obj.oneWithDraw(100)) ? "Il saldo \u00E8 ".concat(obj.balancInit, ".") : 'Non puoi più ritirare.');
        });
    };
    return Account;
}());
var MotherAccount = /** @class */ (function (_super) {
    __extends(MotherAccount, _super);
    function MotherAccount(accountUsername, accountEmail, accountPassword, balancInit, date, interest) {
        return _super.call(this, accountUsername, accountEmail, accountPassword, balancInit, date, interest) || this;
    }
    MotherAccount.prototype.addInterest = function () {
        return this.balancInit + this.balancInit * this.interest / 100;
    };
    return MotherAccount;
}(Account));
var SonAccount = /** @class */ (function (_super) {
    __extends(SonAccount, _super);
    function SonAccount(accountUsername, accountEmail, accountPassword, balancInit, date) {
        return _super.call(this, accountUsername, accountEmail, accountPassword, balancInit, date, 0) || this;
    }
    return SonAccount;
}(Account));
var mAccount = new MotherAccount('maria', 'maria.rossi@gmail.com', '1234', 500, '01/01/2022', 10);
var sAccount = new SonAccount('marco', 'marco.rossi@gmail.com', '1234', 100, '01/01/2022');
var users = [mAccount, sAccount];
console.log("Valore interesse ", mAccount.addInterest());
window.onload = function () {
    users.forEach(function (user) { return user.creationCard(); });
};
