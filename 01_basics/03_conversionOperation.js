// To typecast use Number(),String(),Boolean()

let score = "hitesh"

//console.log(typeof score);
//console.log(typeof(score)); both valid

let valueInNumber = Number(score)
//console.log(typeof valueInNumber);
//console.log(valueInNumber);

// "33" => 33
// "33abc" => NaN (Not a Number)
// true => 1; false => 0
// null => 0 ; undefined => NaN 


let isLoggedIn = "hitesh"

let booleanIsLoggedIn = Boolean(isLoggedIn)
//  console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "hitesh" => true


let someNumber = 33

let stringNumber = String(someNumber)
// console.log(stringNumber);
// console.log(typeof stringNumber);

// *********************** Operations ***********************

let value = 3
let negValue = -value // allowed
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3); // exponentiation
// console.log(2/3); 
// floating point divison (//) floor division is not present 
// console.log(2%3); // modulus => gives remainder 

let str1 = "hello"
let str2 = " hitesh"

let str3 = str1 + str2
// console.log(str3);

// console.log("1" + 2); //12
// console.log(1 + "2"); //12
// console.log("1" + 2 + 2); //122
// console.log(1 + 2 + "2"); //32

// console.log( (3 + 4) * 5 % 3);

// console.log(+true); //1
// console.log(+""); //0

// Just for Questions Don't use such things in actual code 

let num1, num2, num3

num1 = num2 = num3 = 2 + 2

let gameCounter = 100
++gameCounter;
console.log(gameCounter); //prefix postfix 

// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion