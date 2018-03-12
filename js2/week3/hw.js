

//p0
/*
function learningSetTimeOut() {
    console.log("Hi, I have waited for you 10 sec:(")

}
setTimeout(learningSetTimeOut, 10000);

*/
/*
//p1

function function1(arg1) {
    console.log(arg1);
}
function function2(mainFunc) {
    mainFunc("This is a function:)")
}
function2(function1);



*/

/*
function addTo(a, b) {
    return a + b;

};

function generateNmbers(a, b) {
    a = a / 2;
    b = b / 2;
    return (a, b);

};
console.log(generateNmbers(addTo(4, 6)));
*/

/*
var inner = 5;
//var passed = 3;
var addTo = function (passed) {
    var add = function (innner) {
        return passed + inner;
    };
    return add;

};
var addThree = addTo(3);
var addFour = addTo(4);

console.log(addThree(1));
console.log(addFour(1));
*/

function function1(arg1) {
    console.log("I have called function2 as argument  :" + arg1);
}
function function2() {
    return ("This is a function:)");
}
function1(function2());
