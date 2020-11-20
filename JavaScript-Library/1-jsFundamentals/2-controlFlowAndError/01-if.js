/*
IF CONDITIONALS
*/

//allow our code to run based on different inputs given to it

//if IsOn = true run the console.log
let isOn = true;
if (isOn == true){
    console.log('The light is on!');
}

//if IsOn = true (expecting true or false) then run the console.log
if (isOn){
    console.log('The light is on, yay!');
}

// if the weather is less than 70 run the code
let weather = 65;
if (weather <  70){
    console.log('Wear a jacket!');
}

// if string is unconditionally equal to Tyler or is false, run the code
let string = 'Harry';
if (string === 'Harry' || false){
    console.log('if statements and conditionals are powerful!');
}