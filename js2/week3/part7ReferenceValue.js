


let x = 9;
//with the function below; changing the argument inside the function
//does not affect the variable passed from outside.
//So, that's why result is 9.
function f1(val) {

    val = val + 1;
    return val;
    //console.log('inside func' + val);
}

f1(x);

console.log(x);


let y = { x: 9 };

// with the function below; when a variable refers to an object, 
//the value is the reference to the object.
//changing the argument inside the function affects the variable passed
//outside the function.
// So, that's why result is 10.
function f2(val) {

    val.x = val.x + 1;
    return val;

    //console.log('inside obj func value' + val);
}

f2(y);

console.log(y);