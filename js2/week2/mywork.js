let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let oddNumbers = [];

// for (let i in numbers) {
//     if (numbers[i] % 2 !== 0) {
//         oddNumbers.push(numbers[i] * 2)
//     }

// }



var oddNumbers = numbers.filter(odds => odds % 2 === 1);
var oddDoubled = oddNumbers.map(doubled => doubled * 2);
console.log(oddNumbers);
console.log(oddDoubled);

let monday = [
    {
        name: 'Write a summary HTML/CSS',
        duration: 180
    },
    {
        name: 'Some web development',
        duration: 120
    },
    {
        name: 'Fix homework for class10',
        duration: 20
    },
    {
        name: 'Talk to a lot of people',
        duration: 200
    }
];

let tuesday = [
    {
        name: 'Keep writing summary',
        duration: 240
    },
    {
        name: 'Some more web development',
        duration: 180
    },
    {
        name: 'Staring out the window',
        duration: 10
    },
    {
        name: 'Talk to a lot of people',
        duration: 200
    },
    {
        name: 'Look at application assignments new students',
        duration: 40
    }
];

let tasks = monday.concat(tuesday);
// console.log(tasks);

var worthOfTask = 0;
tasks.forEach(function (worth) {
    worthOfTask += worth.duration;
})
console.log(worthOfTask);


let durationToHour = worthOfTask / 60;
console.log("hour = " + durationToHour);


var lessThan2Hours = tasks.filter(less => less.duration / 60 < 2);
console.log("lessThan2Hours>>>>>>>");
console.log(lessThan2Hours);


let salaryForHour = 60;
let salaryForMinute = salaryForHour / 60;
let payment = tasks.map(pay => pay.duration * salaryForMinute);
console.log(payment);
let salary = 0;
payment.forEach(function (eachPayment) { salary += eachPayment });
console.log("Total salary is " + salary + " $");
