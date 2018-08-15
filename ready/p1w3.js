let myString = "hello,this,is,a,difficult,to,read,sentence";
let regex = /,/gi;
myString = myString.replace(regex, ' ');
console.log(myString);
///////////////////////////
let favoriteAnimals = ['blowfish', 'capricorn', 'giraffe'];
favoriteAnimals.push("turtle");
let p1 = favoriteAnimals.slice(0, 1);
let p2 = favoriteAnimals.slice(1);
p1.push("meerkat");
favoriteAnimals = p1.concat(p2);
console.log(favoriteAnimals);
// console.log(p1);
// console.log(p2);
favoriteAnimals.splice(3, 1); ////deleting giraffe
console.log(favoriteAnimals);
console.log(favoriteAnimals.indexOf('meerkat')); ///finding indexof meerkat

////////////////////////////////////////////////
function sum(a, b, c) {

    return a + b + c;

}
console.log(sum(2, 3, 4));

function colorCar(color) {
    console.log("a " + color + " car");

}

///////creating an object and a function that takes the obj ads a argument

colorCar("red")
let expenses = {
    first: "car",
    second: "house",
    third: "plane"

}

function objectFunction(obj) {
    console.log(obj)

}
objectFunction(expenses);
//////////////////////////////

function vehicleType(color, code) {
    if (code === 1) {
        console.log("a " + color + " car");
    } else if (code === 2) {
        console.log("a " + color + " bike");
    }
}
vehicleType("blue", 2);
/////////////////////////////

function vehicle(color, code, age) {
    if (age != 0) {
        if (code === 1) {
            console.log("a " + color + " used  car");
        } else if (code === 2) {
            console.log("a " + color + " used bike");
        }
    } else {
        if (code === 1) {
            console.log("a " + color + "unused  car");
        } else if (code === 2) {
            console.log("a " + color + " unused bike");
        }

    }



}
vehicle("brown", 1, 5);
///////////////////////////
//making an advertisement
let vehicles = ["ship", "car", "motorbike", "caravan", "bike", "copper"];
let advertisemet = "Amazing Joe 's Garage, we service ";
for (let i in vehicles) {
    vehicles[i] = vehicles[i] + "s";

}
let vehiclePart1 = vehicles.slice(0, vehicles.length - 1);
let vehiclePart2 = vehicles.slice(vehicles.length - 1);
advertisemet += vehiclePart1.join(",") + " and " + vehiclePart2.join("") + ".";
console.log(advertisemet)

///////////////////////////////////////