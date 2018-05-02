//function statement
function sayHi() {
    console.log('hi');
}
sayHi();




function CallFunction(fun) {
    fun();
}
//function expression
let sayBye = function () {
    console.log('bye');
};
CallFunction(sayBye);
