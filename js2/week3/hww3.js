

//p0
function learningSetTimeOut() {
    console.log("Hey, I have waited for you 4 sec:(")

}
setTimeout(learningSetTimeOut, 4000);




//p1
function function1(arg1) {
    console.log("I have called function2 as argument  :" + arg1);
}
function function2() {
    return ("This is a function:)");
}
function1(function2());





//p2
var arr = [];


function threeCallback(element) {
    console.log(element + "  is divisible by 3");
};

function fiveCallback(element) {
    console.log(element + "  is divisible by 5")
};

var first = function (start, end, threeCallback, fiveCallback) {

    for (i = start; i <= end; i++) {
        arr.push(i);

    }
    arr.forEach(element => {
        if (element % 3 === 0 & element % 5 === 0) {

            fiveCallback(element); threeCallback(element);
        }
        else if (element % 3 === 0) {
            threeCallback(element);
        }
        else if (element % 5 === 0) {
            fiveCallback(element);
        };

    })
};
first(2, 15, threeCallback, fiveCallback);


