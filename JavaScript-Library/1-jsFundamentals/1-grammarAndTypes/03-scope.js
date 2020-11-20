/*
SCOPE
*/

/*
What is scope?

JS has both LOCAL and GLOBAL scope


JavaScript has global scope and local scope.
Variables declared and initialized outside any function become global variables.
Variables declared and initialized inside function becomes local variables to that function.
Variables declared without var keyword inside any function becomes global variables automatically.
Global variables can be accessed and modified anywhere in the program.
Local variables cannot be accessed outside the function declaration.
Global variable and local variable can have same name without affecting each other.
JavaScript does not allow block level scope inside { } brackets.
*/

//this (var x) is a global scope.  this variable exists anywhere
//i can read var x inside the function or outside the function.  It exists anywhere.
var x = 12;

//var x = 33, var y = 10, console.log(x) is the local scope because it only exists inside the function
//if you want to reuse a variable within a function and it to change forever, use VAR.  If you only want it to run within the function one time, use LET
function scope(){
    var x = 33;
    var y = 10;
    console.log(x);  // returns 33
    console.log(y); // returns 10
}

//scope() is us calling the variable in the function
//inside the function works when we call it with scope();
//it calls 33 because of scope
//any variables you write within a function only exist within that function

scope(); //logs 33
//console.log(y);  //this gives us an error because y doesn't exist outside the function.  this is scoping
console.log(x); //logs 12

//example 2
var x = 12;

function scope(){
    x = 33; // this will reassign the global variable above to 33 everywhere
    console.log(x);
}

scope(); //this returns 33
console.log(x); //this returns 33 because we reassigned the global variable within the function

//example 3:
var x = 1;

function scope(){
    var x = 2;
    function scopeInner(){ //this is the inner most scope
        var x = 3;
        console.log(x); //3
    }
    scopeInner();
    console.log(x); //2 because you're still inside the biggerfunction scope()
}
scope(); //by running this, we are running the entire function including the inner function.  therefore the first console log is the one within the inner function
console.log(x); //we're outside of the function so we only see the global variable 1

//example 4 contrasts with 5:
var x = 12;

function scope(){
    var x = 33;
    if (true){
        let x = 45;
        console.log(x); //45
    }
    console.log(x); //33 because it's within the bigger function scope()
}
scope();
console.log(x); //12 because it's outside the function

//example 5 contrasts with 4:
var x = 12;

function scope(){
    var x = 33;
    if (true){
        var x = 45;
        console.log(x); //45 - first console log
    }
    console.log(x); //45 -- var doesn't obey 'block' scope
}

scope();
console.log(x); //12