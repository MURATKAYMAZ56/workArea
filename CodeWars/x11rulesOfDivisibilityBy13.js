// // When you divide the successive powers of 10 by 13
// // you get the following remainders of the integer divisions:

// //     1, 10, 9, 12, 3, 4.

// // Then the whole pattern repeats.

// // Hence the following method: Multiply the right most digit of the number
// //with the left most number in the sequence shown above,
// // the second right most digit to the second left most digit of the number in the sequence.
// // The cycle goes on and you sum all these products.Repeat this process until the sequence of
// // sums is stationary.

// // Example: What is the remainder when 1234567 is divided by 13
// // 7× 1 + 6× 10 + 5× 9 + 4× 12 + 3× 3 + 2× 4 + 1× 1 = 178
// // We repeat the process with 178:
// // 8 x1 + 7 x10 + 1 x9 = 87
// // and again with 87:
// //  7 x1 + 8 x10 = 87

// From now on the sequence is stationary and the remainder of
// 1234567 by 13 is the same as the remainder of 87 by 13:
// Call thirt the
// function which processes this sequence of operations on an integer n( >= 0).thirt will
// return the stationary number.

// thirt(1234567) calculates 178, then 87, then 87 and returns 87.

// thirt(321) calculates 48, 48 and returns 48

// function thirt(n) {
//     const remainders = [1, 10, 9, 12, 3, 4];
//     const numberStringfy = String(n)
//         .split("")
//         .reverse();
//     let sum = 0;
//     for (let i in numberStringfy) {
//         sum += numberStringfy[i] * remainders[i];
//     }
//     if (sum > 99) {
//         numberStringfy = sum;
//         for (let i in numberStringfy) {
//             sum += numberStringfy[i] * remainders[i];
//         }
//     }

//     return sum;
// }
///////////////////////////////smart solution
function thirt(n) {
    const nums = [1, 10, 9, 12, 3, 4]
    var sum = ('' + n).split('').reverse().reduce((sum, v, i) => sum + v * nums[i % nums.length], 0)
    return sum === n ? n : thirt(sum)
}

////////////////////////////////////////
const getNum = n => [1, 10, 9, 12, 3, 4][n % 6];

const thirt = n => {
    let result = [...`${n}`].reverse().reduce((s, v, i) => s + v * getNum(i), 0);
    return result === n ? result : thirt(result);
}
/////////////////////////

const remainders = [1, 10, 9, 12, 3, 4];

function thirt(n) {
    const r = n
        .toString()
        .split('')
        .reverse()
        .reduce((a, b, index) => parseInt(a) + b * remainders[index % remainders.length]);

    return n === r ? parseInt(n) : thirt(r);

}
////////////////////////
function thirt(n) {
    var w = [1, 10, 9, 12, 3, 4];
    while (true) {
        var r = n,
            q = -1,
            c = 0,
            j = 0;
        while (q !== 0) {
            q = Math.floor(r / 10);
            c += (r % 10) * w[j % 6];
            r = q;
            j++;
        }
        if (c === n)
            return c;
        n = c;
    }
}
/////////////////////
function thirt(n) {
    let r = [...(n + '')].reverse().reduce((t, d, i) => t + d * (Math.pow(10, i) % 13), 0);
    return n === r ? n : thirt(r);
}
console.log(thirt(1234567));