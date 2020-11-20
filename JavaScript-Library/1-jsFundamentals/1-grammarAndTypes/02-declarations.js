/*
VARIABLES

1-grammarAndTypes
    02-declarations.js
*/

//What is a variable?
var a = 1;
var b = 2;
console.log(a + b);

//notes on naming variables:
// 1) a variable must begin with a letter, underscore, or dollar sign
// 2) numbers may follow the above characters, but cannot come first
// 3) JavaScript is case sensitive--'hello' and 'Hello' are different variables

/*
DECLARATIONS, INITIALIZATIONS, ASSIGNMENT
*/

/*
Declarations refer to when we 'declare' a variable

Initializations refer to when a variable is assigned a value

Assignment refers to giving a variable a value.  This can be after initialization
*/

var x;
console.log('Declaration 1:', x); //undefined

x = 10;
console.log('Initialization 1:', x);

x = 33;
console.log('Assignment 1:', x);

var y;
console.log(y); //undefined Declaration

y = 'hello';
console.log(y); //Initialization

y = 'you are my friend';
console.log(y); //Assignment

/*
Var, Let, and Const:

Var = 'old' keyword for variables
Let = 'new' keyword for variables (introduced with ES6)  (RECOMMENDED FOR USE - MORE PREDICTABLE)
const = also 'new' declares unchangeable variables

Var and let you can reassign the variable
const is a bucket with a lid.  you can't reassign the variable
*/

let tonight = 'great!';
const elevenFifty = 'amazing!';
console.log(tonight, elevenFifty);

tonight = 'lovely!';
console.log(tonight, elevenFifty);

// below gives us an error because it is a const.  you can't change the variable with a const
// elevenFifty = 'super!';
// console.log(tonight, elevenFifty);