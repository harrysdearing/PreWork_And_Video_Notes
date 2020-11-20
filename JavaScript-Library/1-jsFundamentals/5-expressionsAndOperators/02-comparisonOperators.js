/*
COMPARISON OPERATORS

5-expressionsAndOperators
    02-comparisonOperators.js
*/

//equality comparison operator
//the double equal sign is doing a type coercion to see if they're similar
console.log('3' == 3);  //true even though one is a string and one is a number
console.log(4 == 4); //true
console.log(3 == '4'); //false

//strict equality comparison operator (triple equal sign is the comparison operator)
//must be same value and same type
console.log(3 == 3);
console.log('3' === 3); //false because not same type (one is a string and one is a number)

//not equal comparison operator
console.log('3' != 4);  // returns true because they are not the same
console.log('3' != 3); // doesn't care whether the type is the same

//strict not equal comparison operator
console.log('3' !== 3); //true because this does care about the type
console.log(3 !== 3); //false because they are the same

//greater than
console.log(3 > 2); //true
console.log(2 > 3); //false

//less than
console.log(2 < 3); // true
console.log(3 < 2); // false

//greater than or equal to
console.log(3 >= 2); //true
console.log(3 >= 3); //true

//less than or equal to
console.log(2 <= 3) //true
console.log(3 <= 2); //false

//And (both expressions of either side of the operator must be true for 'And' to return true)
console.log(1<2 && 3>0); //true because everything is true
console.log(2<2 && 3>0); //false because one is false

//Or (only one of the expressions needs to be true)
console.log(1<2 || 2<3); //true because one of them is true

let obj = {key: 'test'};
console.log(obj == {key: 'test'}); //get false because this is a complex type.  you're comparing is it the exact same thing.  these are examples of 2 separate objects

console.log(obj == obj); //true because I'm comparing the first object to the same object

let arr = [1,2,3,4];

console.log(arr == [1,2,3,4]);  // false because these are 2 different arrays even though they're identical.  they're actually just duplicates.