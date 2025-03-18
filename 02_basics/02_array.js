const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros) 
// !!! does not merge the arrays !!!
// [0,1,2,[3.0,3.1,3.2]] does this instead
// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);
//.concat() returns a new array and does not modify , works on two arrays
//merges the two arrays 

const all_new_heros = [...marvel_heros, ...dc_heros]
// console.log(all_new_heros);
// spread operator (...) merges multiple arrays
// order of using the spread operator (...) matters

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
// .flat(x) flats the array upto x depth
console.log(real_another_array);


console.log(Array.isArray(["Hitesh"])) // true, checks if the passed thing is an array
console.log(Array.from("Hitesh"))
// converts to array ['H','i','t'..... \,'h']
console.log(Array.from({name: "hitesh"})) 
// interesting result gives [] empty array , we also need to give some value with this so it understands array needs to be create by what keys or values.

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3));