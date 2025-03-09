// const let var 

const accountId = 144553
let accountEmail = "hitesh@google.com"
var accountPassword = "12345"
accountCity = "Jaipur" // does not give error but not the right way 
let accountState; // prints undefined 

// accountId = 2 
// not allowed as it is declared as const 

accountEmail = "hc@hc.com"
accountPassword = "21212121"
accountCity = "Bengaluru"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope , var does not understand scope
*/

console.log(accountId,accountEmail)
// prints both things 

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
// gives a tabular structure 