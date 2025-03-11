const name = "hitesh"
const repoCount = 50

// console.log(name + repoCount + " Value");

// string interpolation , uses injection of variables at placeholders 
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);


// using object and string constructor to make a string wrapped around an object (it has object wrapped all the time , on the other hand whenever you make a string the primitve way(primitve string) whenver you apply property like .toUpperCase() it temporarily wraps the primitve string around a object)

// new String(), new Number(), or new Boolean(), it creates persistent objects, which should be avoided unless specifically needed (consume more memory and handles comparisons differently)

//using just String() without new will create primitve string only.
const gameName = new String('hitesh-hc-com')
// typeof returns object because of use of new

// console.log(gameName[0]);  //h
// console.log(gameName.__proto__); //returns {}


// console.log(gameName.length);
// console.log(gameName.toUpperCase()); // no need for gameName.__proto__.toUpperCase()

console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));
// Primitive values remain unchanged because the wrapper object is temporary. If you want changes to persist, you need to store the result in a variable.

// objects use references, but in this case, the temporary wrapper object does not persist—it is created, used, and then discarded immediately. Since it no longer exists after the operation, it cannot modify the original primitive value.

// String methods don’t modify the object itself because strings are immutable—methods return new strings instead.

// Primitive Strings are immutable 

//.toUpperCase and .toLowerCase often used

const newString = gameName.substring(0, 4) 
// end not included
// will treat negative values as 0
console.log(newString);

const anotherString = gameName.slice(-8, 4)
// can also give negative values
// so you can prefer this more
console.log(anotherString);

const newStringOne = "   hitesh   "
console.log(newStringOne);
console.log(newStringOne.trim());
// .trim() removes whitespaces + line terminators(newline character) from both ends
// .trimStart .trimEnd is also available

const url = "https://hitesh.com/hitesh%20choudhary"
console.log(url.replace('%20', '-'))
// replaces only the first occurence
// use .replaceAll() for all occurences

console.log(url.includes('sundar'))
// returns Boolean

console.log(gameName.split('-'));
// .split() based on () , returns an array
// similarly .join() based on ()