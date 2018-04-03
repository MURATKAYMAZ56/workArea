function findBiggestFraction(a, b) {
    console.log("Fraction a: ", firstFraction);
    console.log("Fraction b: ", secondFraction);

    var result;//local

    a > b ? result = ["a", a] : result = ["b", b];
    return result;
}

var firstFraction = 7 / 16;//global
var secondFraction = 13 / 25;//global

var fractionResult = findBiggestFraction(firstFraction, secondFraction);
console.log("Fraction " + fractionResult[0] + " with a value of " + fractionResult[1] + " is the biggest.");
