

let isLoggedIn = true;
let isAuthenticated = true;
let hasLoggedInToday = false;
let hasToken = false;

// == Equality
// === Strict Equality
// != Inequality
// !== Strict Inequality
// > Greater than
// >= Greater than or equal
// < Less than
// <= Less than or equal

console.log(2 > 1); //true
console.log(3 < 2); //false

var test = 2 >= 3; //What will this print?
console.log(test);
console.log("Two is greater than one? " + (2 > 1));
console.log(3 >= 1);

console.log("Password12!" === "Password12!!");
console.log(1 !== 2);
console.log(10 !== 10);    

// Logical Operators
// Two are binary (&& = and, || = or, ! = not)
console.log("&& :", 2===2 && 1===1 ); //true because?
console.log("|| :", 2===2 || 2===1 ); //true because?
console.log("!=", 2 != 1) //true because?