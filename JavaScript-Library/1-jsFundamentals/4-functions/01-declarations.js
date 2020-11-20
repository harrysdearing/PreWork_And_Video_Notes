/*
FUNCTIONS
*/

//General Ideas: at their broadest level, functions do the following:
// 1) they take some input which the function will handle/process
// 2) they process the input given to them
// 3) they usually, but not always, return some value
// 4) they can be invoked (used) as many times as we want, cutting down on code repetition


//example 1:
//inside the parenthesis is the input to the function 
//for a microwave, the time is the input, the heated food is the output

//in this example we are adding 1 to whatever we put in that function
function newFunc(num){
    return num + 1;
}

console.log(newFunc(7)); //8
newFunc(10); //11
newFunc(11); //12
newFunc(-2); //-1


//example 2:
function sentence(firstName, lastName){
    return `My first name is ${firstName} and my last name is ${lastName}`;
}
console.log(sentence('Harry', 'Dearing'));
console.log(sentence('Tyler', 'Shelton'));
let superImportantSentence = sentence('Nicky', 'Disborough'); //we don't see this in the console but anytime we refer to superImportantSentence it will show "My first name is Nicky and my last name is Disborough"
console.log(superImportantSentence);


//example 3:
//let's build a function that takes a complex type--an array in this case, and console.logs each item in the input array

let arr = [1, true, {key: 'string'}, [0, false, null], 'heya!'];
let arr2 = [5,6,7,8,9,10];

function iteratorFunc(inputArr){
    for (let element of inputArr){
        console.log(element);
    }
}
iteratorFunc(arr);
iteratorFunc(arr2);
