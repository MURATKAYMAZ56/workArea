function minMax(arr) {
    if (arr) {
        return [Math.min(...arr), Math.max(...arr)]
    }
}
console.log(minMax([1, 2, 3, 4]))


/////////////////////////////////////////////
function minMax(arr) {
    var minMax = [];
    minMax[0] = Math.min(...arr);
    minMax[1] = Math.max(...arr);
    return minMax;
}
///////////////smart one:)
minMax = a => [Math.min(...a), Math.max(...a)];

/////////
function minMax(arr) {
    var ret = [];
    ret.push(Math.min.apply(null, arr));
    ret.push(Math.max.apply(null, arr));
    return ret;
}