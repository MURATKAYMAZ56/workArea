/*
//after 5 sec wil write I am done
function doIt() {
    console.log('I am done');
}
setTimeout(doIt, 5000)
*/



//simple CLOSURE exp
var passed = 3;
var addTo = function () {
    var inner = 2;
    return passed + inner;

};
console.log(addTo());

/*
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
