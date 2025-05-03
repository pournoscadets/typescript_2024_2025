console.log("hello world");
// difference entre const et let 
let a = 5;
a = 6;
const b = 7;

// typage 
let c: string = "hello";
let d: number = 5.6;
let f: boolean = true;

let g: string[] = ["ali", "mariam"];
let h: Array<number> = [2,3];
// tuple
let coordonnees: [number, number] = [5, 7.6];
let i: null = null;
let k: undefined = undefined;
// Union
let l: string | number = "hello";
l= 6;
// narrowing
// typeof
function afficheVariable(input: string | number): void {
    if(typeof input == "number"){
        console.log(`la somme de l'input et 10 font: ${input + 10}`)
    }else {
        console.log(`${input.toUpperCase()}`)
    }
}
afficheVariable(5);
afficheVariable("bonjour les genies");

// enum
enum DayOfTheWeek{
    LUNDI = "LUNDI",
    MARDI = "MARDI",
    MERCREDI = "MERCREDI",
    JEUDI = "JEUDI"
}
let days: DayOfTheWeek = DayOfTheWeek.JEUDI;
console.log(days)

// litteral
type Genre = "HOMME" | "FEMME";
let personneGenre: Genre = "HOMME";

// creation d'un type

type Etudiant = {
    name: string;
    notes: number[];
    age: number;
}

let etudiant:Etudiant = {
    name: "fabio",
    age: 100,
    notes: [19,20,18]
}

type SuperEtudiant = Pick<Etudiant, "name">
let fabrice: SuperEtudiant = {
    name: "fabrice"
}

type SuperMegaEtudiant = Omit<Etudiant, "name" | "age">;
let abbah: SuperMegaEtudiant = {
    notes:  [19,20,18]
}

// Record
type Una = Record<string, string>
let una:Una = {
    name: "Nangui",
    localite: "Abobo"
}

function sum(a: number, b: number): number {
    return a + b;
}

console.log(sum(2,3))

const produit = (a: number, b: number): number => {
    return a * b
}

console.log(produit(2,3))

const button = document.querySelector("button");

button?.addEventListener('click', (e: Event) => {
    if(button.querySelector('span')?.innerText != null){
        button.querySelector('span')!.innerText = "Bonjour les amis"
    }
})

// OBJETS
let una_:Una = {
    name: "Nangui",
    localite: "Abobo"
}

type Test = {name: string, age: number, adresse?: number}

const test: Test = {name: "Abbah", age: 100}
let test2: Test = {name: "Abbah", age: 100}
test2 = {name: "Abbah", age: 10}

// interfaces

interface Test2 {
    name: string;
    age: number;
    adresse?: number
}

const test3: Test2 = {name: "Jean", age: 10}

// Partial
type Testoptionel = Partial<Test>

// class
class Etudiant2 {

    constructor(private _name: string, private _age: number){}

    get name(){
        return this._name
    }

    get age(){
        return this._age
    }

    set name(name: string){
        this._name = name
    }

    set age(age: number){
        if(age > 0){
            this._age = age
        }
        console.info("l'age ne doit pas etre negatif")
    }
}

let zamble = new Etudiant2("ZAMBLE", 100)
zamble.age = -5
console.log(zamble)