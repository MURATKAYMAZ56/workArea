// const animals = ["cat", "dog", "turtle"];


// const mappedArray = animals.map(animal => animal.charAt(0).toUpperCase() + animal.slice(1));

// console.log(mappedArray);


// const evenNumber = [2, 4, 6, 8];
// const multipyEvenNumbers = evenNumber.map(number) => number * 2;
// console.log(multipyEvenNumbers);



/*
const animals = ["cat", "dog", "turtle"];
const animalsLongerThan3Letter = animals.filter(animal => animal.length > 3)
console.log(animalsLongerThan3Letter)

*/
const numbers = [2, 4, 6, 8, 65];


const sum = numbers.reduce(soFar, number) => {
    return soFar + number;

}, 0;
console.log(sum)