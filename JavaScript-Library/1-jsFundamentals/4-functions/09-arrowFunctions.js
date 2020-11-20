/*
ARROW FUNCTIONS
*/

//it's possible to make functions 1 of 2 ways:

//normal function declaration -- named functions
function coffee(){
    return 'coffee is good';
}

//normal function expression -- unnamed functions
//this is an anonymous function
let tea = function(){
    return 'tea is healthy';
}

console.log(coffee()); //doesn't take any inputs because it is empty above
console.log(tea());

//arrow functions are ALWAYS anonymous
//arrow function expression -- rather than the word function it uses the arrow before the curly bracket
let hotChocolate = () => {
    return 'hot chocolate is king';
}

console.log(hotChocolate());


//console.log(animals(5, 4));  // this will say animals is not defined because variable is not defined yet
let animals = (kittens, puppies) => {return `I have ${kittens} cat(s) and ${puppies} dog(s)`};

console.log(animals(3, 2)); // 3 and 2 is defining the number of kittens, puppies
console.log(animals(0, 0));

//concise vs. block body
//concise body -- can exclude parenthesis around a single parameter (x)
let apples = x => `There are ${x} apples`
console.log(apples(10));

//block body -- requires return keyword
let bananas = (x) => {
    return `There are ${x} bananas`;
}

console.log(bananas(5));

//return must be explicitly written in a block-body arrow function

let func = () => 'hi';
console.log(func());

let secondFunc = () =>
'hi';

console.log(secondFunc());