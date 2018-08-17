// Reverse the provided string.
// You may need to turn the string into an array before you can reverse it.
// Your result must be a string.

function reverseString(str) {
    let splitedArr = str.split("");
    //console.log(splitedArr);
    let reversed = splitedArr.reverse();
    let joined = reversed.join("");

    return joined;
}
reverseString("hello");