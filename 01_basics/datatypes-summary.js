//  Primitive
//  Call by Value 
//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt 

let score = 100
const scoreValue = 100.3
score = "100"
// JS is dynamically typed (don't need to explicitly mention variable types) / variable type can change at runtime

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId); // False

const bigNumber = 3456543576654n
console.log(typeof bigNumber);

// JS will automatically use bigint behind the scene if the number is too large if you want to make the number bigInt use n after the number 



// Reference (Non primitive)
// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];

let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello World!");
}

console.log(typeof heros);
// null => object
// undefined => undefined
// function => function (function object)
// symbol => symbol
// array => object

// https://262.ecma-international.org/5.1/#sec-11.4.3