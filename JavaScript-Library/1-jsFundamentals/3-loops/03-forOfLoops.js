/*
FOR OF LOOPS
*/

//great for iterating over values in an object
//iteration requires numbered 'things' to work through

//student is an object
//of doesn't work in this because it requires that your 'thing' you're looping through be iterable--that means it needs to be numbered
//for in loops -- in does not require that the thing you loop through be numbered

// let student = {name: 'Peter', isAwesome: true, degree: 'javascript', week: 1}; 
// for (item of student){
//     console.log(item);
// }


// cat in this case doesn't represent the number of the position but the actual value
let catArray = ['tabby', 'british shorthair', 'burmese', 'maine coon', 'rag doll'];

for (cat of catArray){
    console.log(cat, 'says meow');
}