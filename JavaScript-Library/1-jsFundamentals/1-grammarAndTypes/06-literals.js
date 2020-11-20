/*

LITERALS

*/

let weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
console.log(weekDays.toString());  //using a method here -- the method is .toString()
console.log(weekDays[3]);

let soup = {
    a: 'chicken noodle',
    b: 'tomato',
    c: 'beef and barley'
}

console.log(soup.c);

//array and object literals are complex or dynamic types (a lot more going on with them)
//array and object literals can hold primitive and 'complex' types (arrays, objects, functions)
//                       #, boolean, string,   array,     object,          function
//                       0    1       2        3            4                 5  
let complexArrLiteral = [1, true, 'Academy', [1,2,3], {key: 'test'}, function(){return 'yes'}];
console.log(complexArrLiteral[5]);
console.log(complexArrLiteral[3]);

let complexObjLiteral = {num: 1, boolean: true, string: 'Academy', arr: [1,2,3], obj: {key: 'test'}, func: function(){return 'yes'}};
console.log(complexObjLiteral.func); // returns [Function: func]
console.log(complexObjLiteral.arr); // returns [ 1, 2, 3 ]