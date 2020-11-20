/*
TERNARIES

5-expressionsAndOperators
    03-ternaries.js
*/

// ? divides the conditional from what we do if it is true
// this is saying if x is greater than 0, console log x is positive.  if not, run x is negative
let x = 6;

x > 0 ? console.log('x is positive') : console.log('x is negative');

//the code above will run exactly the same as what's listed below
if (x > 0){
    console.log('x is positive');
} else {
    console.log('x is negative');
}

// this is the normal elseif statement
let greeting = 'salutations!';

if (greeting.length > 10){
    console.log('that is a long greeting');
} else if (greeting.length == 10){
    console.log('your greeting is exactly 10 characters!');
} else {
    console.log('what a normal greeting');
}

//ternary
greeting.length > 10 ? console.log('that is a long greeting') :
greeting.length == 10 ? console.log('your greeting is exactly 10 characters!') :
console.log('what a normal greeting');