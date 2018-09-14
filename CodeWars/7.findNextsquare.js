function findNextSquare(sq) {
    // Return the next square if sq if a perfect square, -1 otherwise
    if (Math.sqrt(sq) != parseInt(Math.sqrt(sq))) {
        return -1
    }
    for (let i = sq + 1; i > 0; i++) {
        if (Math.sqrt(i) === parseInt(Math.sqrt(i))) {
            return i
        }
    }
}
console.log(findNextSquare(26))

//////////////////smart solution
function findNextSquare(sq) {
    return Math.sqrt(sq) % 1 ? -1 : Math.pow(Math.sqrt(sq) + 1, 2);
}