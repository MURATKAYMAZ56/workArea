// Combine an Array into a String Using the join Method
// The join method is used to join the elements of an array together to create a string.It takes an argument
// for the delimiter that is used to separate the array elements in the string.

// Here 's an example:

var arr = ["Hello", "World"];
var str = arr.join(" ");
// Sets str to "Hello World"


//////////////////////
//arr.join([separator])

var elements = ['Fire', 'Wind', 'Rain'];

console.log(elements.join());
// expected output: Fire,Wind,Rain

console.log(elements.join(''));
// expected output: FireWindRain

console.log(elements.join('-'));
// expected output: Fire-Wind-Rain