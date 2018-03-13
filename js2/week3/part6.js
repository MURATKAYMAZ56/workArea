
/*
var a = [];
a.push(["1", "2"]);
a.push(["1", "2"]);
a.push(["1", "2"]);
console.log(a);
for (var i = 0; i < a[i].length; i++) {
    for (var z = 0; z < a.length; z++) {
        console.log(a[z][i]);
    }
}

*/

var arr = [[1, 2], [3, 4], [5, 6]];
for (let i in arr) {
    for (let j in arr) {
        console.log(arr[i][j]);
    }
};
