


let createBase = function (arg) {
    var add = function (innerArg) {
        return arg + innerArg;
    }
    return add;

};

let addSix = createBase(6);
//addSix(10); // returns 16
//addSix(21); // returns 27
console.log(addSix(10));
console.log(addSix(21));

// var passed = 3;
// var addTo = function () {
//     var inner = 2;
//     return passed + inner;
// };
// console.log(addTo());


var addTo = function (passed) {
    var add = function (inner) {
        return passed + inner;

    }
    return add;

}
var addThree = addTo(3);
var addFour = addTo(4);

console.log(addThree(1));
console.log(addFour(1));