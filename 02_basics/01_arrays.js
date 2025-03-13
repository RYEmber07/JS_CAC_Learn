// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeroes = ["shaktiman", "naagraj"]
// creates shallow copy not a deep copy (heap memory,share same refrence)

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

// Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9)
// unshift => pushes value to front (time-consuming operation as need to shift all values) 
// myArr.shift()
// like pop but for front 

// console.log(myArr.includes(9)); // is 9 present ? returns boolean
// console.log(myArr.indexOf(3)); // returns index if present if not then -1

// const newArr = myArr.join()

// console.log(myArr);
// console.log(newArr);
// adds all elements of the array into a string [0,1,2,3] => 0,1,2,3

// slice, splice

console.log("original array :", myArr);

const myn1 = myArr.slice(1, 3)

console.log("using slice :",myn1);
console.log("original array after using slice ", myArr);

const myn2 = myArr.splice(1, 3)
console.log("using splice :",myn2);
console.log("original array after using splice :", myArr);


//difference between slice and splice is splice modifes(the left part remains only) the original array and also includes the outer range

// eg. if i use .splice(1,3) on 0,1,2,3,4
//spliced portion is 1,2,3 the array gets modified to 0,4

