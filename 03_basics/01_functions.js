
function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("S");
    console.log("E");
    console.log("N");
    console.log("B");
    console.log("E");
    console.log("R");
    console.log("G");
}

// sayMyName() 
// for execution
// sayMyName
// for refrence

// console.log(sayMyName());
// console.log(sayMyName);


// function addTwoNumbers(number1, number2){

//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){
    // number1 and number2 are parameters
    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3, 5) //arguments
// if nothing is returned in the function result holds undefined
// if you pass (3,null) null is converted to 0
// console.log("Result: ", result);

function loginUserMessage(username = "sam") {
    // "sam is default value and username will never be undefined and will be overwritten if argument is passed"

    // check for undefined if we dont use default value 
    // if(username === undefined){
    //     console.log("Please enter a username")
    //     return
    // }
    // or
    // which is found in professional code
    // if(!username){
    // empty string , undefined are taken false by js
    //     console.log("Please enter a username");
    //     return
    // }
    return `${username} just logged in`
}

// console.log(loginUserMessage("hitesh"))
// console.log(loginUserMessage())
// if no value is passed function gives undefined if not checked for it .

function calculateCartPrice(val1, val2, ...num1){
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000))
               
const user = {
    username: "hitesh",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));