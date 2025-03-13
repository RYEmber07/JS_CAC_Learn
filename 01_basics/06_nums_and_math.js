const score = 400
// console.log(score);

const balance = new Number(100)
// console.log(balance)
// wraps a object around

console.log(balance.toString().length);

// console.log(balance.toFixed(1));
// .toFixed(n) rounds off upto n decimal places
// here if 0.445 is there it rounds to 0.45 for 2 decimal places 0.5 goes to upper one

const otherNumber = 123.8966 // 123.9
// console.log(otherNumber.toPrecision(4));
// to precise for n values 

// .toFixed(n)	Rounds to n decimal places. Adds zeros if needed.
// .toPrecision(n)	Rounds to n total significant digits, not just decimals.

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN')); for Indian Standard
// console.log(hundreds.toLocaleString()); fo US standard

// Some Properties directly associated with Number datatype
// Number.MAX_VALUE (max value above which any value will be called Infinity)
// Number.MAX_SAFE_INTEGER (This is the largest integer JavaScript can accurately represent) (loses accuracy after)
// similarly for MIN


// +++++++++++++ Maths +++++++++++++++++++++++++++++

// Maths is a library form JS by default 
// To access Value of PI use Math.PI 

// .abs() .round() .... are methods of Math
// console.log(Math);
// console.log(Math.abs(-4)); // 4 i.e. is absolute value
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));
// console.log(Math.min(4, 3, 6, 8));
// console.log(Math.max(4, 3, 6, 8));
// similarly .sqrt() .pow()

console.log(Math.random()); 
// gives a value from [0 , 1) only 

console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1); // gives values from 1 to 10 

const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max - min + 1)) + min)
// includes both min value and max value