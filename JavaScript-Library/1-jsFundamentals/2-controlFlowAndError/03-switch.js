/*
SWITCH STATEMENTS
*/

//without the break, all of the cases run.  
let friend = 'Tom';

switch(friend){
    case 'Tom':
        console.log('Hey Tom, when will you bring sourdough bread for me?');
        break;
    case 'Ken':
        console.log('Hey Ken, do you own a wolf in your backyard?');
        break;
    case 'Alex':
        console.log('Hey Alex, how many Magic cards do you own?');
        break;
    default:
        console.log(`I'm sorry, ${friend}, but do I know you?`)
}

let yep = true;

switch(typeof yep == 'string' || typeof yep == 'boolean'){
    case true :
        console.log('yep is a string or a boolean');
        break;
    default:
        console.log('yep is not a string or a number');
}