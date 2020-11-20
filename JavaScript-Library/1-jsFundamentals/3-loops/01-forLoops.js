/*
LOOPS

3-loops
    01-forLoops.js
*/

//allow you to repeat code over and over
//functions allow you to repeat code on demand

/*
Loops offer a quick and easy way to do something repeatedly

There are many different kinds of loops but they all do roughly the same thing;
    For statement
    do while
    while
    labeled
    break
    continue
    for in
    for of
    .forEach
    .map
*/

//loop structure: 
// a) creation of an indexing variable
// b) a run condition
// c) change to the indexing variable

// count to 10 from 0 and log the numbers:

// i = 0 (i is index).  saying start at 0.  run the loop as long as i is less than or equal to 10. once we have run it a single time we want to increase i
// start i at 0.  then check if it is less than or equal to 0.  add 1 then it checks using the middle variable.  It keeps running until the check in the middle stops it 
// i = 0 IS STARTING POSITION
// i <= 10 IS THE ENDING POSITION
// i++ IS TELLING IT WHAT TO DISPLAY (IN THIS CASE WE WANT TO SHOW EVERY NUMBER.  IF WE DID i+=2 IT WOULD ONLY DISPLAY 0, 2, 4, 6, 8, 10)
for (let i = 0; i <= 10; i++){
    console.log(i);
}

//loops can run infinitely - in this case, there is no condition in the middle so it keeps running forever and never ends.  this would break our code
// for (let i = 0; ; i++){
//    console.log(i);
// }

//counts to -25 by -3, starting from 2, logs the numbers
for (let i = 2; i>=-25; i = i-3){
    console.log(i);
}

//display the letters in a name individually
let name = 'Kinkade';

for (let i = 0; i < name.length; i++){
    console.log(name[i]);
}

//for loops can use lots of variables
// Math is a built in Javascript object with a random method.  random gives us a number between 0 and 1.  we're taking that number between 0 and 1 and multiplying it by 30. 
// then we're using math.floor to shave off the decimal portion of that number so we can only get whole numbers
let start = 2;
let stop = Math.floor(Math.random()*30);
let increment = 3;

for (let i = start; i <= stop; i = i + increment){
    console.log(i);
}