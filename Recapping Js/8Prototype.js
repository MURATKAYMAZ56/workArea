/// prototype is a object that is shared among all object.
/// we can not add new property to existing object but with prototype t can be


// function Person(first, last, age, eyecolor) {
//     this.firstName = first;
//     this.lastName = last;
//     this.age = age;
//     this.eyeColor = eyecolor;
// }
// var myFather = new Person("John", "Doe", 50, "blue");
// var myMother = new Person("Sally", "Rally", 48, "green");
// Person.nationality = "English"
// console.log(per.nationality)==undefined;



////////prototype   //////////////
// function Person(first, last, age, eyecolor) {
//     this.firstName = first;
//     this.lastName = last;
//     this.age = age;
//     this.eyeColor = eyecolor;
// }
// Person.prototype.nationality = "English";

// const per = new Person();
// console.log(per.nationality);

//////////////
function Person(first, last, age, eyecolor) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eyecolor;
}
Person.prototype.name = function () {
    return this.firstName + " " + this.lastName;
};
const per = new Person("add", "dadad", "fff", "fgfgfg");
console.log(per.age);

///////////////////////////

function Bird(name) {
    this.name = name; //own property
}

Bird.prototype.numLegs = 2; // prototype property

let duck = new Bird("Donald");
let ownProps = [];
let prototypeProps = [];

for (let property in duck) {
    if (duck.hasOwnProperty(property)) {
        ownProps.push(property);
    } else {
        prototypeProps.push(property);
    }
}

console.log(ownProps); // prints ["name"]
console.log(prototypeProps); // prints ["numLegs"]
console.log(duck.numLegs);

//////////////////////////////////////
const Ker = function (age, birth) {
    this.age = age;
    this.birth = birth;
}



Ker.prototype.numLegs = 2;
Ker.prototype.eat = function () {
    console.log("nom nom nom");
}

Ker.prototype.describe = function () {
    console.log("My name is " + this.name);
}

console.log(Ker.prototype);

/////////////////////////////////////////