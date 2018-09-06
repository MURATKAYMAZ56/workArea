/*Given an array of integers.

Return an array, where the 
first element is the count of positives numbers and 
the second element is sum of negative numbers.

If the input array is empty or null, return an empty array: */

function countPositivesSumNegatives(input) {
    const arr = [];
    let count = 0;
    if (input == null || input.length === 0) {
        return arr;

    } else if (input) {
        const posNum = input.forEach(elem => {
            if (elem > 0) {
                count++;
            }

        });
        const sumNeg = input.filter(elem => elem < 0).reduce((a, b) => a + b, 0);
        arr.push(count);
        arr.push(sumNeg);
        return arr;

    }
}
console.log(countPositivesSumNegatives([]));
/////////////akilli cozum


function countPositivesSumNegatives(input) {
    return input && input.length ? [input.filter(p => p > 0).length, input.filter(n => n < 0).reduce((a, b) => a + b, 0)] : [];
}