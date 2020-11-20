// Conditional statements, using boolean variables, are in all JavaScript applications. Conditionals check conditions in your program. 
// They have the power to alter the state or flow of your application based on certain conditions being met or unmet, true or false.

var isOn = true;
if(isOn === true) {
    console.log("The light is on.");
}

// Shorthand way for above example.  This is implicitly checking if isOn is true: equivalent to the original statement (isOn === true).
var isOn = true;
if(isOn) { // same as if (isOn === true) 
    console.log("The light is on. It's bright.");

// Checking if the temperature is greater than 70.  If it is, we print "Wear shorts today! It's going to be hot!"
var weather = 75;
if(weather > 70){
        console.log("Wear shorts today! It's going to be hot!");
    }