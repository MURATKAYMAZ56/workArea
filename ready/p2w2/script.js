const numbers = [1, 2, 3, 4, 5, 6, 7, 8, ];
const newNumber = [];
numbers.map((num) => {
    if ((num % 2) !== 0) {
        newNumber.push(num * 2)
    }
});
console.log(newNumber);
//////////////////////


const monday = [{
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

const tuesday = [{
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

const tasks = monday.concat(tuesday);
//console.log(tasks);
let durationInHour = 0;
let perHourfee = 20;
let earned;
tasks.map((time) => {
    durationInHour = durationInHour + (time.duration / 6);
    earned = Math.round(perHourfee * durationInHour);



})
console.log(durationInHour)
console.log(earned);

const less2 = tasks.filter((task) => task.duration < 120)