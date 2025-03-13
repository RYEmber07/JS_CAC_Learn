// Dates

let myDate = new Date()
// need to create a date object 
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);
// typeof myDate is object
// all of these display date in a different format

// ISO Date	"2015-03-25" (The International Standard) YYYY-MM-DD or MM-DD-YYYY

// Short Date	"03/25/2015" /MM/DD/YYYY
// Long Date	"Mar 25 2015" or "25 Mar 2015" /MMM DD YYYY
// these can be passed to Date() to get custom time


// let myCreatedDate = new Date(2023, 0, 23)
// year, month(start with 0 in JS) , date

// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// year , month , day , hour , min

// let myCreatedDate = new Date("2023-01-14")
// yyyy-mm-dd
// here month starts with 1 

let myCreatedDate = new Date("01-14-2023")
// mm-dd-yyyy
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()
//  returns the number of milliseconds since January 1, 1970

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// gives ms of custom time 

// convert to seconds
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());
// gives 0-6 weekday starting with sumday

// `${newDate.getDay()} and the time `

newDate.toLocaleString('default', {
    weekday: "long",
})
// format can be customised like this

//refer W3schools : https://www.w3schools.com/js/js_date_formats.asp
