let monday = [
    {
        name     : 'Write a summary HTML/CSS',
        duration : 180
    },
    {
        name     : 'Some web development',
        duration : 120
    },
    {
        name     : 'Fix homework for class10',
        duration : 20
    },
    {
        name     : 'Talk to a lot of people',
        duration : 200
    }
];

let tuesday = [
    {
        name     : 'Keep writing summary',
        duration : 240
    },
    {
        name     : 'Some more web development',
        duration : 180
    },
    {
        name     : 'Staring out the window',
        duration  : 10
    },
    {
        name     : 'Talk to a lot of people',
        duration : 200
    },
    {
        name     : 'Look at application assignments new students',
        duration : 40
    }
];

let tasks = monday.concat(tuesday);

console.log(tasks);

var worth = 0;
tasks.forEach(function(task) {
    worth += task.duration;
});

console.log("worth: " + worth);

var hours = worth/60;
console.log("hours: " + hours);

let lessThanTwoHoursTasks = tasks.filter(task => task.duration/60 < 2);
console.log("lessThanTwoHoursTasks >>> ");
console.log(lessThanTwoHoursTasks);

let salaryForHours = 60;
let salaryOfMinutes = salaryForHours/60;
let payments = tasks.map(task => task.duration * salaryOfMinutes);
console.log("payments: " + payments);
let salary = 0;
payments.forEach(payment => salary += payment);
console.log("total salary: " + salary + "€");