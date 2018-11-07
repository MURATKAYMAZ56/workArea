function approx(pts) {
    const number = Math.sqrt(pts[0]) + Math.sqrt(pts[1])
    return number;
}
console.log(approx([3, 4]))