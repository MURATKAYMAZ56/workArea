
const fruits = ["apple", "banana", "pear", "peach"];
fruits.forEach(function (value) {
    console.log(value);
});

//// now lets do it with CALLBACK
console.log("now I do the same with the callback");
function callback(value) {
    console.log(value);
}
const fruits2 = ["apple", "banana", "pear", "peach"];
fruits2.forEach(callback);
