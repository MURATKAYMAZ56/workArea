// Complete the
// function that accepts a string parameter, and
// reverses each word in the string.All spaces in the string should be retained.

// Examples
//     "This is an example!" == > "sihT si na !elpmaxe"
// "double  spaces" == > "elbuod  secaps"


function reversingSentence(sentence) {
    return sentence.split('').reverse().join('');


}
console.log(reversingSentence("this is a? test!"))