let myString = 'I\'m a robot';
if (myString.indexOf('ninja') === -1) {
    console.log('the word is not in myString');
}

if (myString.indexOf('robot') != -1) {
    console.log('it has that word');
}


////////COMPARING STRING
let strng1 = "abc";
let strng2 = "ABC";
if (strng1.toLocaleUpperCase() === strng2.toLocaleUpperCase()) {
    console.log('strings are equal')

}