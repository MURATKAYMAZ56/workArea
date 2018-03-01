
var animals = [
    { name: "karabas", species: "dog" },
    { name: "mavis", species: "cat" },
    { name: "pamuk", species: "rabbit" },
    { name: "meymun", species: "monkey" },

];

/*
     //doing in regular way
var dogs = [];
for (var i in animals) {

    if (animals[i].species === "dog") {
        dogs.push(animals[i])
    };


};
console.log(dogs);
*/


//doing by FILTER
var dogs = animals.filter(function (animals) {
    return animals.species === "dog"
}
);
console.log(dogs);