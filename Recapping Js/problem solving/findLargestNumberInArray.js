function largestOfFour(arr) {
    // You can do this!
    let largest = 0;
    for (let i in arr) {
        //console.log(i)
        for (j = 0; j < arr[i].length; j++) {
            console.log(j)
            if (arr[i][j] > largest) {
                largest = arr[i][j];
            }

        }
    }
    return console.log(largest);
}

largestOfFour([
    [4, 5, 1, 3],
    [13, 27, 18, 26],
    [32, 35, 37, 39],
    [1000, 1001, 857, 1]
]);