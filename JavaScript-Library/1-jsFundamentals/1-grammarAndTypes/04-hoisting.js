/*
HOISTING
*/
//hoisting is unique to JavaScript

//example 1
console.log(scissors); //how does it know this is a thing?  it's because JavaScript uses hoisting to pull the variables to the top 
var scissors = 'blue';

//example 1 breakdown:
//Javascript pulls all of the variables and functions to the top of the file so we can be lazy in our code development
//lines 7 and 8 look like this behind the scenes
var scissors:
console.log(scissors);
scissors = 'blue'

//should be
var scissors = 'blue';
console.log(scissors);

//example 2:
function hoistTest(){
    console.log(testVar); //this should break because it doesn't exist until line 20 but we get undefined
    var testVar = 10;
    console.log(testVar);
}

hoistTest();

//example 2 breakdown

function hoistTest(){
    var testVar;
    console.log(testVar); //this should break because it doesn't exist until line 20 but we get undefined
    testVar = 10;
    console.log(testVar);
}

hoistTest();