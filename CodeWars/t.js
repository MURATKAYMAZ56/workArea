const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const tr = arr.reduce((a, b) => a + b, 0);

const sum;
for (let i in arr) {
    sum = arr[i] + arr[i + 1] + arr[-i + 2];
}