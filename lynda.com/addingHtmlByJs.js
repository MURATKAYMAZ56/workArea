'use strict';
const date = new Date();
console.log("today date is " + date);

document.body.innerHTML = "<h1>today date is" + date + "</h1>";
document.body.innerHTML = "<h1>The date today is " + date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear() + "</h1>";

///UNARY operator
let a = 5;

a = a + 1;
a++;//this is unary operator
