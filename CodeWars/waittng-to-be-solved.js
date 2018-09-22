// // The new "Avengers"
// // movie has just been released!There are a lot of people at the cinema box office standing in a huge line.Each of them has a single 100, 50 or 25 dollars bill.An "Avengers"
// // ticket costs 25 dollars.

// // Vasya is currently working as a clerk.He wants to sell a ticket to every single person in this line.

// // Can Vasya sell a ticket to each person and give the change
// // if he initially has no money and sells the tickets strictly in the order people follow in the line ?

// //     Return YES,
// //     if Vasya can sell a ticket to each person and give the change with the bills he has at hand at that moment.Otherwise
// // return NO.
// // === JavaScript ==

// tickets([25, 25, 50]) // => YES 
// tickets([25, 100]) // => NO. Vasya will not have enough money to give change to 100 dollars
// tickets([25, 25, 50, 50, 100]) // => NO. Vasya will not have the right bills to give 75 dollars of change (you can't make two bills of 25 from one of 50)
function tickets(peopleInLine) {
    const yes = "YES";
    const no = "NO"
    let twentyFive = 0
    for (let i in peopleInLine) {
        if (peopleInLine[i] === 25) {
            twentyFive = twentyFive + 1;
        } else if (peopleInLine[i] != 25) {
            if (peopleInLine[i] / 25 - 1 <= twentyFive) {
                twentyFive = twentyFive + peopleInLine[i] / 25 - 1

            }

        } else {
            return no;
        }

    }
    return yes;

}
console.log(tickets([25, 25, 50]))
console.log(tickets([25, 25, 50, 50, 100]))

/////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////
/////////////////////////////////////////////////////
/////////////////////////////////////////////////////
// // Divisors of 42 are : 1, 2, 3, 6, 7, 14, 21, 42.
// These divisors squared are: 1, 4, 9, 36, 49, 196, 441, 1764.
// The sum of the squared divisors is 2500 which is 50 * 50, a square!

// // Given two integers m, n (1 <= m <= n)
// we want to find all integers between m and n
// whose sum of squared divisors is itself a square. 42 is such a number.

// // The result will be an array of arrays or of tuples (in C an array of Pair) or a string,
// each subarray having two elements,
// first the number whose squared divisors is a square and then the sum of the squared divisors.

// // #Examples:

// // list_squared(1, 250) --> [[1, 1], [42, 2500], [246, 84100]]
// // list_squared(42, 250) --> [[42, 2500], [246, 84100]]
function listSquared(m, n) {
    const desiredSquares = [];
    const divisors = [];
    const eachDivisors = [];
    const sum = 0
    // your code
    for (k = m; k <= n; k++) {
        for (i = 1; i <= k; i++) {
            if (k % i === 0) {
                eachDivisors.push(i);


            }
            divisors.push(eachDivisors);
        }

    }
    console.log(divisors);


}
listSquared(42, 250);