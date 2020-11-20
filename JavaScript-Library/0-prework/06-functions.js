// Here's an example of declaring a function. Name the function hello.  Execute code.
function hello() {
    console.log("Hello World!");
}

// To execute a function we call or invoke it. Using the name of the function, followed by parentheses, calls it.
hello(); // invokes the function hello.

// Write a function to print "Pacers won!" Then call the function.
function pacersWon(){
    console.log("Pacers won!");
}
pacersWon();

// (bottle, cap) = Parameters or slots the placeholders for inputs that the function should receive
// ("green bottle", "white cap") = Arguments (these are the specific values of JS data types that we give those slots when we run a function)
// we're making bottle = green bottle and cap = white cap
function bottleCapper(bottle, cap) {
    return bottle + cap;
}

bottleCapper("green bottle","white cap")

// Here is a function with one parameter
function numberEntered(num){
    console.log("The number you entered was: ", num);
}

// A parameter is similar to a variable. The parameter num can change each time we call the function. When we call the function, we have to pass an argument for the parameter :
numberEntered(5);
numberEntered(4);
numberEntered(3);
numberEntered(2);
numberEntered(1);

// function to add 2 numbers
function addAnyTwoNumbers(x, y){
    console.log(x + y);
}

addAnyTwoNumbers(4, 5);
addAnyTwoNumbers(6, 11);
addAnyTwoNumbers(7, 8);

// function to subtract 2 numbers
function subtractTwoNumbers(firstNum, secondNum){
    console.log(firstNum - secondNum);
}

subtractTwoNumbers(5, 7);

// When JS reaches a return statement, execution stops. The function will return a value. For example, create a function to return a batting average (number-of-at-bats divided by number-of-hits). The function has two parameters (1. number-of-at-bats, 2. number-of-hits).
function getMyBattingAverage(atBats, numberOfHits){
    let myAverage = numberOfHits / atBats;
    return myAverage; 
}
console.log(getMyBattingAverage(250, 91)); // = 0.364

// Write a function to return the usm of two numbers (parameters)
function add(x, y){
    let sum = x + y;
    return sum; // or return x + y;
}
console.log(add(1,1)); 

// Write a function with a first name and a last name as parameters. Then return the whole name.

function fullName(first, last){
    let wholeName = first + " " + last;
    return wholeName; // Or return first + " " + last;
}
console.log(fullName("Paul", "O'Connor"));

// Write a function to calculate and return the totalPrice of a quantity of products, including 7% tax.
function calculatePriceIndiana(quantity, price){
    let totalPrice = 1.07 * quantity * price;
    return totalPrice; // Or return 1.07 * quantity * price;
}
console.log(calculatePriceIndiana(17, 5));