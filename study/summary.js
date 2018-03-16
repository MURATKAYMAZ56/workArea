//w1
//p1 console log smthng
console.log("hello world");
console.log("hello mars");
console.log("hello jupiter");
console.log("hello venus");
//p2 fixing console.log('I'm awesome');
console.log("I'm awesome");
//p3
var x;
console.log("the value of x : undefined " + x);

//w2
//p1 length , replace , with space
let myString = "hello,this,is,a,difficult,to,read,sentence";
console.log(myString);
console.log(myString.length);
myString = myString.replace(/,/g, ' ');
console.log(myString);
//p2
let favoriteAnimals = ['blowfish', 'capricorn', 'giraffe'];

favoriteAnimals.push('turtle');
console.log(favoriteAnimals);
var part1 = favoriteAnimals.slice(0, 1);/// slice(begin,end) end is not included
console.log(part1);
var part2 = favoriteAnimals.slice(1);
console.log(part2);
part1.push('meerkat');
console.log(part1);
newArray = part1.concat(part2);
console.log(newArray);
//morejs part
function sum(x, y, z) {
    return x + y + z;
};
var result = sum(5, 6, 7);
console.log(result);


function colorCar(color) {
    console.log(color + 'car');
};
colorCar('pink');
let obj = { mer: 20, audi: 15, bmw: 35 };


function printObj(obj) {
    let myKey = Object.keys(obj)
    for (let i in myKey) {
        key = myKey[i];
        console.log(key + ' property is ' + obj[key]);
    }
};
printObj(obj);

//p4
function vehicleType(color, code) {
    if (code === 1) {
        console.log(color + ' car');
    } else if (code === 2) {
        console.log(color + ' bike')
    }
};
vehicleType('blue ', 1);
