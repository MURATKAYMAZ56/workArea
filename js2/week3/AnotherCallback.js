
var arr = [];

function threeCallback(element) {

    console.log(element + "  is divisible by 3");
};

function fiveCallback(element) {
    console.log(element + "  is divisible by 5")
};

var main = function (start, end, threeCallback, fiveCallback) {

    for (i = start; i <= end; i++) {
        arr.push(i);

    }
    arr.forEach(element => {
        if (element % 3 === 0 & element % 5 === 0) {

            fiveCallback(element); threeCallback(element);

        } else if (element % 3 === 0) {

            threeCallback(element);

        } else if (element % 5 === 0) {

            fiveCallback(element);
        };

    })
};
main(2, 15, threeCallback, fiveCallback);


