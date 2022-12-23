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
;
var Smartphone = /** @class */ (function () {
    function Smartphone() {
    }
    Smartphone.getPin = function (obj) {
        var pin = Number(document.getElementById('pin').value);
        var ret = 0;
        obj.forEach(function (input) {
            if (input.pin == pin) {
                ret = obj.indexOf(input);
            }
        });
        return obj[ret];
    };
    ;
    Smartphone.layout = function (utente) {
        var schermo = document.getElementById('schermo');
        schermo.style.backgroundImage = " url('".concat(utente.bg, "')");
        schermo.innerHTML = " <div class=\"container\"> <h2> Ciao ".concat(utente.name, "! </h2> \n        <p> il tuo credito \u00E8 ").concat((utente.carica).toFixed(2), " &euro;</p>\n        <p> chiamate: ").concat(utente.numeroChiamate, " </p>\n        <div id=\"carica\"><input type=\"number\"> <button> Ricarica </button> </div>\n        <div id=\"chiama\"><input type=\"number\"> <button> Chiama </button>  </div>\n        </div> ");
        Smartphone.bottone(utente);
    };
    Smartphone.bottone = function (obj) {
        var bottoneCarica = document.querySelector('#carica button');
        var bottoneChiama = document.querySelector('#chiama button');
        bottoneCarica === null || bottoneCarica === void 0 ? void 0 : bottoneCarica.addEventListener('click', function () {
            var inp = document.querySelector('#carica input');
            obj.ricarica(Number(inp.value));
            Smartphone.layout(obj);
        });
        bottoneChiama === null || bottoneChiama === void 0 ? void 0 : bottoneChiama.addEventListener('click', function () {
            var inp = document.querySelector('#chiama input');
            obj.chiamata(Number(inp.value));
            Smartphone.layout(obj);
        });
    };
    return Smartphone;
}());
;
var User = /** @class */ (function () {
    function User(carica, numeroChiamate) {
        this.carica = carica;
        this.numeroChiamate = numeroChiamate;
    }
    User.prototype.ricarica = function (unaRicarica) {
        this.carica += unaRicarica;
    };
    User.prototype.chiamata = function (minutiDurata) {
        this.numeroChiamate += 1;
        this.carica -= Math.ceil(minutiDurata) * 0.20;
    };
    ;
    User.prototype.numero404 = function () {
        return this.carica;
    };
    ;
    User.prototype.getNumeroChiamate = function () {
        return this.numeroChiamate;
    };
    ;
    User.prototype.azzeraChiamate = function () {
        this.numeroChiamate = 0;
    };
    ;
    return User;
}());
var FirstUser = /** @class */ (function (_super) {
    __extends(FirstUser, _super);
    function FirstUser(obj) {
        var _this = _super.call(this, obj.credito, obj.chiamate) || this;
        _this.id = obj.id;
        _this.name = obj.name;
        _this.pin = obj.pin;
        _this.bg = obj.bg;
        _this.user = obj.user;
        return _this;
    }
    return FirstUser;
}(User));
var SecondUser = /** @class */ (function (_super) {
    __extends(SecondUser, _super);
    function SecondUser(obj) {
        var _this = _super.call(this, obj.credito, obj.chiamate) || this;
        _this.id = obj.id;
        _this.name = obj.name;
        _this.pin = obj.pin;
        _this.bg = obj.bg;
        _this.user = obj.user;
        return _this;
    }
    return SecondUser;
}(User));
var ThirdUser = /** @class */ (function (_super) {
    __extends(ThirdUser, _super);
    function ThirdUser(obj) {
        var _this = _super.call(this, obj.credito, obj.chiamate) || this;
        _this.id = obj.id;
        _this.name = obj.name;
        _this.pin = obj.pin;
        _this.bg = obj.bg;
        _this.user = obj.user;
        return _this;
    }
    return ThirdUser;
}(User));
fetch('utenti.json').then(function (result) {
    return result.json();
}).then(function (data) {
    var controllo = document.getElementById('entra');
    controllo.addEventListener('click', function () {
        var us = (Smartphone.getPin(data.utenti));
        console.log(us);
        if (us.user == 1) {
            Smartphone.layout(new FirstUser(us));
        }
        else if (us.user == 2) {
            Smartphone.layout(new SecondUser(us));
        }
        else if (us.user == 3) {
            Smartphone.layout(new ThirdUser(us));
        }
    });
});
