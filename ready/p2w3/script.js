function doIt() {
    console.log("I am done");
}
///setTimeout(doIt, 3000);

//////////

function function1(arg1) {
    console.log("I have called function2 as argument  :" + arg1);
}

function function2() {
    return ("This is a function called:)");
}
function1(function2());


//////////////////////
let arr = [];

function threeCallback(elem) {
    console.log(elem + " is divisible by 3");
}

function fiveCallback(elem) {
    console.log(elem + " is divisible by 5");
}

function main(startValue, endValue, threeCallback, fiveCallback) {
    for (i = startValue; i <= endValue; i++) {
        arr.push(i);
    }
    arr.forEach(elem => {
        if (elem % 3 === 0) {
            threeCallback(elem);
        } else if (elem % 5 === 0) {
            fiveCallback(elem);
        }

    })


}

main(2, 16, threeCallback, fiveCallback);
/////////////////////////////////
////writing each item in 2d array
const arr2d = [
    [1, 2],
    [3, 4],
    [5, 6],
    [8, 9]
];
let arr1d = [];
for (let i in arr2d) {
    for (let j = 0; j < arr2d[i].length; j++) {

        arr1d.push(arr2d[i][j]);

    }
}
console.log(arr1d);
///////////////////
const addSix = createBase(6);
addSix(10); // returns 16
addSix(21); // returns 27