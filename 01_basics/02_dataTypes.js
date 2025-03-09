"use strict"; // treats all JS code as newer version

// alert(3 + 3)
// we are using nodejs, not browser , so will result in error

console.log(3 
    +
     3) // Code readability should be high

console.log(3+3); console.log("Hitesh") 
// Code readability should be high

// official documentation / standards : tc39.es

let name = "hitesh"
let age = 18
let isLoggedIn = false
let state;

// primitive data types
// number => 2 to power 53
// bigint
// string => ""/''
// boolean => true/false
// null => standalone value => server se mann lo data aaya hi nahi 
// undefined => value is not assigned
// symbol => unique


// object

console.log(typeof undefined); // undefined
console.log(typeof null); // object
console.log(typeof age) // number