/// arr.sort([compareFunction])

function Ascending(a, b) {
    return a - b;

}


function Descending(a, b) {
    return b - a;
}
let arr = ["a", "d", "c", "a", "z", "g"]

let numArr = [2, 8, 5, 6, 0, 7, 2, 1, 9];

console.log(arr.sort(Ascending()));

console.log(numArr.sort(Ascending));

console.log(numArr.sort(Descending));

/////////////////////////////////////////////also could be like below;

function alphabeticalOrder(arr) {
    // Add your code below this line
    return arr.sort(function (a, b) {
        return a > b;
    })


    // Add your code above this line
}
alphabeticalOrder(["a", "d", "c", "a", "z", "g"]);

//Return a Sorted Array Without Changing the Original Array
// A side effect of the sort method is that it changes the order of the elements
// in the original array.In other words, it mutates the array in place.
// One way to avoid this is to first concatenate an empty array to
// the one being sorted(remember that concat returns a new array), then run the sort method.
var globalArray = [5, 6, 3, 2, 9];

function nonMutatingSort(arr) {
    // Add your code below this line
    let localArr = []
    return localArr.concat(arr).sort(function (a, b) {
        return a - b;
    })

    // Add your code above this line
}
nonMutatingSort(globalArray);