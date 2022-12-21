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
var Tax = /** @class */ (function () {
    function Tax(tasseInps, tasseIrpef) {
        this.tasseInps = tasseInps;
        this.tasseIrpef = tasseIrpef;
    }
    Tax.prototype.getTasseInps = function () {
        console.log(this.redditoAnnuoLordo, this.codredd, this.tasseInps);
        return this.redditoAnnuoLordo * this.codredd * this.tasseInps / 100;
    };
    Tax.prototype.getTasseIrpef = function () {
        var a = this.redditoAnnuoLordo * this.codredd;
        var tas = 0;
        if (a > 50000) {
            tas += (a - 50000 * Math.floor(a / 50000)) * 0.43;
            a = 50000;
            tas += (a - 28000 * Math.floor(a / 28000)) * 0.35;
            a = 28000;
            tas += (a - 15000 * Math.floor(a / 15000)) * 0.25;
            a = 15000;
            tas += a * 0.23;
        }
        else if (a > 28000) {
            tas += (a - 28000 * Math.floor(a / 28000)) * 0.35;
            a = 28000;
            tas += (a - 15000 * Math.floor(a / 15000)) * 0.25;
            a = 15000;
            tas += a * 0.23;
        }
        else if (a > 15000) {
            tas += (a - 15000 * Math.floor(a / 15000)) * 0.25;
            a = 15000;
            tas += a * 0.23;
        }
        else {
            tas += a * 0.23;
        }
        return tas;
    };
    return Tax;
}());
var Workers = /** @class */ (function (_super) {
    __extends(Workers, _super);
    function Workers(codredd, redditoAnnuoLordo, tasseInps, tasseIrpef) {
        var _this = _super.call(this, tasseInps, tasseIrpef) || this;
        _this.codredd = codredd;
        _this.redditoAnnuoLordo = redditoAnnuoLordo;
        return _this;
    }
    Workers.prototype.getUtileTasse = function () {
        return this.getTasseInps() + this.getTasseIrpef();
    };
    Workers.prototype.getRedditoAnnuoNetto = function () {
        return this.redditoAnnuoLordo - this.getUtileTasse();
    };
    return Workers;
}(Tax));
var Artigiano = /** @class */ (function (_super) {
    __extends(Artigiano, _super);
    function Artigiano(redditoAnnuoLordo, tasseInps, tasseIrpef) {
        return _super.call(this, 0.78, redditoAnnuoLordo, tasseInps, tasseIrpef) || this;
    }
    return Artigiano;
}(Workers));
var Freelancer = /** @class */ (function (_super) {
    __extends(Freelancer, _super);
    function Freelancer(redditoAnnuoLordo, tasseInps, tasseIrpef) {
        return _super.call(this, 0.50, redditoAnnuoLordo, tasseInps, tasseIrpef) || this;
    }
    return Freelancer;
}(Workers));
var Imprenditore = /** @class */ (function (_super) {
    __extends(Imprenditore, _super);
    function Imprenditore(redditoAnnuoLordo, tasseInps, tasseIrpef) {
        return _super.call(this, 0.63, redditoAnnuoLordo, tasseInps, tasseIrpef) || this;
    }
    return Imprenditore;
}(Workers));
var puls = document.querySelectorAll("button");
puls[0].addEventListener("click", function () {
    var boxRedd = document.querySelector('#redd');
    var redd = Number(boxRedd.value);
    var boxTax = document.querySelector('#tax');
    var tax = Number(boxTax.value);
    var worker = new Artigiano(redd, tax, 0);
    writeData(worker);
});
puls[1].addEventListener("click", function () {
    var boxRedd = document.querySelector('#redd');
    var redd = Number(boxRedd.value);
    var boxTax = document.querySelector('#tax');
    var tax = Number(boxTax.value);
    var worker = new Freelancer(redd, tax, 0);
    writeData(worker);
});
puls[2].addEventListener("click", function () {
    var boxRedd = document.querySelector('#redd');
    var redd = Number(boxRedd.value);
    var boxTax = document.querySelector('#tax');
    var tax = Number(boxTax.value);
    var worker = new Imprenditore(redd, tax, 0);
    writeData(worker);
});
function writeData(obj) {
    var div = document.createElement('div');
    var cont = document.querySelector('#risultati');
    cont.innerHTML = '';
    div.innerHTML = "<div>\n    <p>Reddito netto:".concat(obj.getRedditoAnnuoNetto(), "</p>\n    <p>Tasse utile:").concat(obj.getUtileTasse(), "</p>\n    <p>Tasse inps:").concat(obj.getTasseInps(), "</p>\n    <p>Tasse irpef:").concat(obj.getTasseIrpef(), "</p>\n    <div>");
    cont.append(div);
}
