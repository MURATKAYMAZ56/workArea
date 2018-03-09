// function addTo(a, b) {
//     return a + b;

// };

// function generateNmbers(a, b) {
//     a = a / 2;
//     b = b / 2;
//     return (a, b);

// };

// console.log(addTo(generateNmbers(4, 6)));

/*
var passed = 3;
var addTo = function (passed) {
    var add = function (innner) {
        return passed + inner;
    };
    return add;

};
var addThree = new addTo(3);
var addFour = new addTo(4);

console.log(addThree(1));
console.log(addFour(1));
*/

var first = function (start, end, threeCallback, fiveCallback) {
    var arr = [];
    for (i = start; i <= end; i++) {
        arr.push(i);
        console.log(arr);
    };
    // for (let i in arr) { 
    //     if (i % 3 === 0) {
    //         return threeCallback(start, end);
    //     } else if (i % 5 == 0) {
    //         return fiveCallback(start, end);
    //     } else if (i % 3 === 0 & i % 5 === 0) {
    //         return threeCallback(start, end); fiveCallback(start,end);
    //      };
    // };

};
first(5, 10);