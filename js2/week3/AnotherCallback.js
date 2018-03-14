/*
let x = function () {
    console.log("I am called from inside a function")
};
let y = function (callback) {
    console.log('do smthng')
    callback();

}
y(x);
*/
/*
let calc = function (num1, num2, calcType) {
    if (calcType === "add") {
        return num1 + num2;
    } else if (calcType === "multiply") {
        return num1 * num2;

    }

};
console.log(calc(2, 3, 'add'));

*/

let add = function (a, b) {
    return a + b;
};
let multiply = function (a, b) {
    return a * b;
};

let testingfunction = function (k, l) {
    return "k and l are requesed"
};
let calc = function (num1, num2, callback) {
    return callback(num1, num2);
};
console.log(calc(2, 3, add));