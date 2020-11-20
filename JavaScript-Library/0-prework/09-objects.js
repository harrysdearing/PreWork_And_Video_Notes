// An object is a data type allowing us to store a collection of properties and methods. (Methods is a future topic.)

// Here is an object literal
// Use the let keyword, create a name and add an equal sign (=).
// Next, add { }.
// name, age, vocation, and isRetired are properties or keys of the object. Each has a colon (:) preceding the value.
// Each of the properties has a value. "Bob Alcorn"   59   "Chief Operating Office"   false.
let bobAlcorn = {
    name            : "Bob Alcorn",
    age             : 59,
    vocation        : "Chief Operating Officer",
    isRetired       : false
};

// The dot . is an operator, like a plus sign. It gives you access to the object's properties and their values. 
// Use the object's name, then the ., then the property name. This accesses the value of the property. Check it out:
console.log(bobAlcorn);
console.log(bobAlcorn.name);
console.log(bobAlcorn.age);

let friend = {
    childHoodBestFriend : "Pat Gates",
    workFriend : "EarlEverson",
    childHoodBestFriendYears : "30 years",
    vegasFriend : "Joel Elijah"
}

console.log(friend);
console.log(friend.workFriend);
console.log(friend.childHoodBestFriend);

let movie = {
    sonFavoriteMovie : "Pokemon",
    movieType : "Action",
    favoriteMovieType : "True Crime Movies"
}

console.log(movie);
console.log(movie.favoriteMovieType);
console.log(movie.sonFavoriteMovie);

let company = {
    name : "H4",
    mission : "create customized solutions for the print industry",
    age : 2,
    founder : "Harry"
}

console.log(company);
console.log(company.age);
console.log(company.mission);