// const tinderUser = new Object()
// Creates Singleton Object

const tinderUser = {};

tinderUser.id = "123abc";
tinderUser.name = "Sammy";
tinderUser.isLoggedIn = false;
// console.log(tinderUser);

const regularUser = {
  email: "some@gmail.com",
  fullname: {
    userfullname: {
      firstname: "hitesh",
      lastname: "choudhary",
    },
  },
};
// we can do nesting on objects
// console.log(regularUser.fullname.userfullname.firstname);
// console.log(regularUser.fullname?.userfullname.firstname);
// the ? question mark ensures protection , like if fullname doesn't exist , used when we have response form api

const obj1 = {1: "a", 2: "b"};
const obj2 = {3: "a", 4: "b"};
const obj4 = {5: "a", 6: "b"};

// const obj3 = { obj1, obj2 } wrong ,leads to two objects in a object

// const obj3 = Object.assign({}, obj1, obj2, obj4)
// (target , source ,source ,source ....)
// Object.assign(obj1,obj2) will also work but passing empty parathesis (optinal parameter) is the right way .
// not passing {} will lead to modification in obj1

// spread operator
const obj3 = {...obj1, ...obj2};
// console.log(obj3);

const users = [
  {
    id: 1,
    email: "h@gmail.com",
  },
  {
    id: 1,
    email: "h@gmail.com",
  },
  {
    id: 1,
    email: "h@gmail.com",
  },
];
// arrays of objects
// users[1].email to access first object's email

// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// Object.keys(objectName) gives array of keys

// console.log(Object.values(tinderUser));
// Object.values(objectName) gives array of values

// console.log(Object.entries(tinderUser));
// Object.keys(objectName) gives array of a array of key and value
// eg. [ ['id':'1234abcd'],['email':'xyz@domain.com'] ]

console.log(tinderUser.hasOwnProperty("isLoggedIn"));
// does isLoggedIn property exist , returns bool

// Use obj.hasOwnProperty("prop") when checking a property on a specific object instance. (instance method)
// Use static methods like Object.keys(obj) when you want to work with objects generally

const course = {
  coursename: "js in hindi",
  price: "999",
  courseInstructor: "hitesh",
};

// course.courseInstructor
// Syntactic sugar refers to syntax in a programming language that makes code easier to read and write but doesn't add new functionality.
// destrucutring (syntactic sugar)
const {courseInstructor: instructor} = course;
// {which value to get} = from where
// or {which value to get:what you will call it} = from where

// console.log(courseInstructor);
console.log(instructor);

// almost JSON strucutre (JavaScript Object Notation)
// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
  {},
  {},
  {}
];
// we can also get api in this format
// this is also JSON format

// randomuser.me api (a popular api)
// JSON Formatter (can simplify api for you)
