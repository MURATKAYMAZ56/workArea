function findLongestWordLength(str) {
    let words = str.split(" ");
    //console.log(words);
    let maxlength = 1;
    for (let i in words) {
        if (words[i].length > maxlength) {
            maxlength = words[i].length;

        }
    }
    return console.log(maxlength);
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");