// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);


// console.log("2" > 1);
// console.log("ABC" > 1); 
// "2" is converted to 2 then compared
// ABC becomes NaN which always returns False on comparison

console.log(null > 0); // False
console.log(null == 0); // False
console.log(null >= 0); // True 
// equality == works differently to >=, >,<=,< comparisons convert null to number and treat it as 0 

console.log(undefined == 0); // False
console.log(undefined > 0); // False
console.log(undefined < 0); // False
// similarly for undefined


// ===  (strict equality operator) for strict check
// checks values as well as datatype 
console.log("2" === 2);