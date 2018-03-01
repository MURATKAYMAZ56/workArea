
// Question is>>>we want to get an array of all the names of alll animals


var animals = [
    { name: "karabas", species: "dog" },
    { name: "mavis", species: "cat" },
    { name: "pamuk", species: "rabbit" },
    { name: "meymun", species: "monkey" },

];


/*
//regular way
var names = [];
for (let i in animals) {
    names.push(animals[i].name);
}


*/

/*    
    //by map with regular function
var names = animals.map(function (animals) {
    return animals.name
});

*/

//by map with arrow function
var names = animals.map((x) => x.name);// u can write animals instead x



console.log(names);