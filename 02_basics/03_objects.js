// singleton 
// when we create a object using constructor (singletion object is not created by literals)

// Object.create (constructor method)

// object literals const JsUser = {}
const mySym = Symbol("key1")
const JsUser = {
    name: "Hitesh", // no need to write name as "name" but it is being treated like that only 
    "full name": "Hitesh Choudhary",
    [mySym]: "mykey1",
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// Ways to access objects

// console.log(JsUser.email)
// this method will not work for full name 

// console.log(JsUser["email"]) // you have to mention "email" just email wont work
// console.log(JsUser["full name"])

// to use a symbol as a key if you just od 
// mySym : "mykey1", and print the typeof JsUser.mySym it is string
// To do this do [mySym] : "mykey1",
// and it can only be accessed by this method
// console.log(JsUser[mySym])

JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser) so no one can do changes on the Object
JsUser.email = "hitesh@microsoft.com" // no error but chnage will not propogate
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
// will create a new key and its value is this function
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
    // 'this' will be used to select the same object
}

console.log(JsUser.greeting()); 
// while refereing a method if you do just JsUser.greeting it will not execute the function it gives reference of function
console.log(JsUser.greetingTwo());