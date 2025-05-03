"use strict";
console.log("hello world");
// difference entre const et let 
let a = 5;
a = 6;
const b = 7;
// typage 
let c = "hello";
let d = 5.6;
let f = true;
let g = ["ali", "mariam"];
let h = [2, 3];
// tuple
let coordonnees = [5, 7.6];
let i = null;
let k = undefined;
// Union
let l = "hello";
l = 6;
// narrowing
// typeof
function afficheVariable(input) {
    if (typeof input == "number") {
        console.log(`la somme de l'input et 10 font: ${input + 10}`);
    }
    else {
        console.log(`${input.toUpperCase()}`);
    }
}
afficheVariable(5);
afficheVariable("bonjour les genies");
// enum
var DayOfTheWeek;
(function (DayOfTheWeek) {
    DayOfTheWeek["LUNDI"] = "LUNDI";
    DayOfTheWeek["MARDI"] = "MARDI";
    DayOfTheWeek["MERCREDI"] = "MERCREDI";
    DayOfTheWeek["JEUDI"] = "JEUDI";
})(DayOfTheWeek || (DayOfTheWeek = {}));
let days = DayOfTheWeek.JEUDI;
console.log(days);
let personneGenre = "HOMME";
let etudiant = {
    name: "fabio",
    age: 100,
    notes: [19, 20, 18]
};
let fabrice = {
    name: "fabrice"
};
let abbah = {
    notes: [19, 20, 18]
};
let una = {
    name: "Nangui",
    localite: "Abobo"
};
function sum(a, b) {
    return a + b;
}
console.log(sum(2, 3));
const produit = (a, b) => {
    return a * b;
};
console.log(produit(2, 3));
const button = document.querySelector("button");
button === null || button === void 0 ? void 0 : button.addEventListener('click', (e) => {
    var _a;
    if (((_a = button.querySelector('span')) === null || _a === void 0 ? void 0 : _a.innerText) != null) {
        button.querySelector('span').innerText = "Bonjour les amis";
    }
});
// OBJETS
let una_ = {
    name: "Nangui",
    localite: "Abobo"
};
const test = { name: "Abbah", age: 100 };
let test2 = { name: "Abbah", age: 100 };
test2 = { name: "Abbah", age: 10 };
const test3 = { name: "Jean", age: 10 };
// class
class Etudiant2 {
    constructor(_name, _age) {
        this._name = _name;
        this._age = _age;
    }
    get name() {
        return this._name;
    }
    get age() {
        return this._age;
    }
    set name(name) {
        this._name = name;
    }
    set age(age) {
        if (age > 0) {
            this._age = age;
        }
        console.info("l'age ne doit pas etre negatif");
    }
}
let zamble = new Etudiant2("ZAMBLE", 100);
zamble.age = -5;
console.log(zamble);
