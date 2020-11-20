console.log("I was born in Indianapolis.");
console.log("I've lived in three states.");
console.log("I like Indiana the best.");
console.log("My bank account had two million bucks in it. It's gone now.");

// We use let, var, or const to create a string variable. 
var tweet = "Lebron is king! Westbrook for president!";
let facebookPost = "Just thought I'd share this goofy video of my dog eating our couch.";
const username = 'jamespauloconnor';  

// You can use numbers in a string, but you won't be able to do math. Numbers in quotes are actually text.
let age = "21";
let years = "3";
console.log(age + years); // You won't get 24! What do you get?

//  Concatenation is adding two or more strings together. A plus sign is the concatenation operator.
var birthCity = "Indianapolis ";
var birthState = "Indiana";

console.log(birthCity + ", " + birthState); 

// We can mix strings and numbers together. When you do this, JavaScript turns numbers into strings. This is know as coercion. 
let ageInAugust = 40; 
let highSchool = "Bill Murray High School";
let graduatedHighSchool = 1994;
const commaWithSpace = ", ";

console.log(highSchool + commaWithSpace + graduatedHighSchool);
console.log("My age in August:", ageInAugust);

//length - returns the length of a string (including spaces)
console.log(highSchool.length); 

//lower or upper case
console.log(highSchool.toUpperCase()); //BILL MURRAY HIGH SCHOOL
console.log(highSchool.toLowerCase()); //bill murray high school

console.log(highSchool.split(" ")); //splits the string into an array on each space['Bill', 'Murray', 'High', 'School' ]
console.log(highSchool.slice(0, 11)); // Extracts from highSchool[0] to and including highSchool[11]

