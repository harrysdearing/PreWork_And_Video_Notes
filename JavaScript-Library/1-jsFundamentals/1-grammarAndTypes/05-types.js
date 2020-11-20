/*
TYPES

1-grammarAndTypes
    05-types.js
*/

//Boolean - anything that is binary that returns True/False, yes/no, etc. with one of two situations
var on = true;
console.log(on);

let off = false;
console.log(off);

//boolean can represent: true/false, yes/no, on/off, 0/1

//Undefined
/*
Undefined usually means a variable has been declared, but it's not been assigned a value
It is some bucket that we haven't filled.  A variable we need to declare
*/

let grass;
console.log(grass); //undefined in this example

var undef = undefined; //I can make a variable undefined but don't need to because Javascript automatically does this
console.log(undef);

//Null
/*
Null means a variable has been declared and assigned a value of null
*/

var empty = null;
console.log(empty);

/*
Null and undefined both represent variables with no value inside.  Think of it this way --
null values are for gag gifts that are boxes intentionally given with nothing inside (because that's the gag).
Undefined values are gifts given when the person giving the gift has forgotten to put the gift
inside (oops!).
*/

//Numbers
let myLiteralAge = 90;
console.log(myLiteralAge);

let precise = 999999999999999;
console.log(precise);

let rounded = 9999999999999999;
console.log(rounded);

//JavaScript numbers break down after a certain point.  After 15 digits it will typically round.

let notQuite = 0.2 + 0.1;
console.log(notQuite);

//JavaScript has problems with Decimals
//if you need to be precise, pull in an outside open source project

let numbersAreHard = (0.2 * 10 + 0.1 * 10) / 10;
//In this example, we are calculating numbers that equal a decimal so it is okay

//Strings
//String is any value within quotes; JS spits out the value within the quotes
//you can use single or double quotes
let stringOne = "double quotes";
let stringTwo = 'single quotes';
console.log(stringOne, stringTwo);

//string concatenation vs addition
let first = 1050 + 100; //this is a number
let second = '1050' + '100'; //this is an example of a string

console.log(first);
console.log(second);

let third = 1050 + 'abcde';
console.log(third);
console.log(typeof third); //typeof lets us know what kind of value our variable is

//Interpolation
//lets you use strings with dynamic content (they require backticks)  backticks are ``

//Example 1 - age is the dynamic content
let age = 32;
let string = `my age is: ${age}`
console.log(string);

//Objects
/*
What is an object?

An object is a container that stores property names and their values
(it can hold multiple data types)

Denoted by {}
Have keys and values--color (key): 'blue' (value), separated with a colon, each
key-value pair is separated with a comma
*/

//hulk is the variable.  All of the values within are part of the object
let hulk = {
    color: 'green',
    age: 42,
    isStrong: true
}

console.log(hulk);
console.log(hulk.age);  //using dot notation to see specific property within the object
console.log(typeof hulk);

//Arrays
/*
Arrays store multiple values in an ordered way.  The difference between an object and an array is they store these values in a numbered sequence.
They too, hold multiple data types.

Denoted by []
Objects are denoted by {}
Has values ('blue', 'green', 'yellow'), separated by commas
*/

var stepsToBrushTeeth = ['uncap toothpaste', 'squeeze toothpaste', 'rinse brush', 'brush', 'clean toothbrush']
//array indexing                 0                    1                  2           3             4           ....
console.log(stepsToBrushTeeth);
console.log(stepsToBrushTeeth[0]); //see first value in the array with 0
console.log(typeof stepsToBrushTeeth);  //will always show object instead of array.  Object is kind of a parent to an array.
