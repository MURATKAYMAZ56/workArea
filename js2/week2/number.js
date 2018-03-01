let numbers = [1, 2, 3, 4];
let newNumbers = [];

// for(let i = 0; i < numbers.length; i++) {
//     if(numbers[i] % 2 !== 0) {
//         newNumbers.push(numbers[i] * 2);
//     }
// }

// console.log("The doubled numbers are", newNumbers); // [2, 6]

newNumbers = numbers.filter(number => number % 2 == 1);
newNumbers = newNumbers.map(number => number * 2);

console.log(newNumbers);

