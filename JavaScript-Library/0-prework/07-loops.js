// Write a for loop to print a range of numbers from 1 to 100 by 1s
// for (initialExpression; condition; incrementExpression)
// initialExpression sets the starting value of a loop control variable (LCV).  In the example following, i is the LCV.
// condition is evaluated, if true, stay in the loop, otherwise exit the loop. condition is i <= 10.
// incrementExpression updates the LCV. i++ adds 1 to i.
for (let i = 1; i <= 100; i += 1){ 
    console.log(i);
}

// We create and initialize i to 1.
// Check: is i less than or equal to 10? i is 1, so the condition is true.
// Execute console.log("Number:", i);.
// Next: i++. Continue to execute steps 2, 3, and 4 until i = 11. See next figure.
for (let i = 1; i <= 10; i++){
    console.log("Number:", i);
}

// Loop from  0 to 50 by 5s.
for(var i = 0; i <= 50; i += 5){
    console.log(i);
}

// Loop from 20 to 1 by -1s.
for (var i = 20; i >= 1; i--){
    console.log(i);
}

// Loop starting at 3, and increments by 5, but doesn't go over 30.
for(var i = 3; i < 30; i += 5){
    console.log(i)
}

// Write a loop. Call a function each time the loop iterates. You choose the conditions and write the function to call.
function pacersWon(){
    console.log("Pacers won!");
}

for(let i = 0; i < 5; i++){
    pacersWon(); // calls pacersWon function.
}