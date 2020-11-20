/*
FOR IN LOOPS
*/

//this is an object
//this for loop lets item represent the key in our object
let student = {name: 'Peter', awesome: true, degree: 'javascript', week: 1};

//item is a string representing that key name
for (item in student){
    console.log(item);
}

//the square bracket - when item is name it gives us Peter.  when item is awesome, it gives us true
for (item in student){
    console.log(student[item]);
}

//in this example, cat represents the positions of all the items in the array
let catArray = ['tabby', 'british shorthair', 'burmese', 'maine coon', 'rag doll'];

for (cat in catArray){
    console.log(cat);
}

//to get the value in the array
for (cat in catArray){
    console.log(catArray[cat]);
}

//let's write a for-in loop that capitalizes the first letter of a name
//n is the number of each character in pAuL and represents 0 then 1 then 2 then 3 (positions)
//below we're setting the first position and making it capital
//else take whatever else we have in capName and make them lowercase


let instructor = 'pAuL';
let capName;

for (n in instructor){
    if (n == 0){
        capName = instructor[n].toUpperCase();
    } else {
        capName += instructor[n].toLowerCase();
    }
}
console.log(capName);