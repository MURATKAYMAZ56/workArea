//1. Write a JavaScript program to compare two objects to 
//determine if the first one contains equivalent property values to the second one.

function compareProps(obj1, obj2) {
    for (let prop in obj1) {
        /////// if ne demek istiyorr!(......)
        if (!(prop in obj2) || obj1[prop] !== obj2[prop]) {
            return false;
        }
    }
    return true;
}
console.log(compareProps({
    a: 1,
    b: 2,
    c: 3
}, {
    a: 1,
    b: 2,
    c: 3
})); // true
console.log(compareProps({
    a: 2,
    b: 2,
    c: 3
}, {
    a: 1,
    b: 2,
    c: 3
})); // false
console.log(compareProps({
    a: 2,
    b: 2,
    c: 'aloha'
}, {
    a: 1,
    b: 2,
    d: 'aloha'
})); // false
//////////////////////////////////////////////////
const matches = (obj, source) =>
    Object.keys(source).every(key => obj.hasOwnProperty(key) && obj[key] === source[key]);
console.log(matches({
    age: 25,
    hair: 'long',
    beard: true
}, {
    hair: 'long',
    beard: true
})); // true
console.log(matches({
    hair: 'long',
    beard: true
}, {
    age: 25,
    hair: 'long',
    beard: true
})); // false
console.log(matches({
    hair: 'long',
    beard: true
}, {
    age: 26,
    hair: 'long',
    beard: true
})); // false