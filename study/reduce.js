var orders = [
    { amount: 205 },
    { amount: 300 },
    { amount: 450 },
    { amount: 50 },
    { amount: 700 },
]



/*
var totalAmount = 0;
for (i in orders) {
    totalAmount += orders[i].amount
};


*/

var totalAmount = orders.reduce(function (sum, order) {
    return sum + order.amount
}, 0

)
console.log(totalAmount);