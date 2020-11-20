/*
ASSIGNMENT OPERATORS

5-expressionsAndOperators
    01-assignmentOperators.js
*/
//Assignment operator
let x = 20;

//addition assignment operator
x += 1;
console.log(x); //21

//subtraction assignment operator
x -=1; //x = x - 1
console.log(x); //20

//multiplication assignment operator
x *= 2; //x = x * 20
console.log(x); //40

//division assignment operator
x /= 4;
console.log(x); //x = x / 4

//remainder (modulus) assignment operator
x %= 2;
console.log(x); // gives us remainder.  In this case it equals an even 5 so the remainder is 0

//modulus operator
console.log(5%3); // 5/3 = 1 2/3 (gives us what's left over.  2/3 is left over so we get 2)
console.log(25%7); // 25/7 = 3 4/7 (gives us what's left over.  4/7 is left over so we get 4)

//exponential assignment operator
x = 2;
x **= 2;  // this takes x and raises it to the power of 2 (2 x 2 = 4)
console.log(x);

let y = 7;
y **= 3; // 7 to the power of 3 (7 x 7 x 7 = 343)
console.log(y);