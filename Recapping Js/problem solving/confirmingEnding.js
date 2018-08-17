function confirmEnding(str, target) {
    // "Never give up and good luck will find you."
    // -- Falcor
    let check = 0;
    let splitSentence = str.split(" ");
    let splittarget = target.split("");
    console.log(splittarget);
    let lastWordIndex = splitSentence.length - 1;
    let lastLettersOfLastWord = splitSentence[lastWordIndex].split("");
    console.log(lastLettersOfLastWord);
    for (let i in splittarget) {

        if (splittarget[splittarget.length - 1] === lastLettersOfLastWord[lastLettersOfLastWord.length - 1]) {
            check++;


        }

    }
    console.log(check);
    if (check === splittarget.length) {
        console.log("splottargerlength" + splittarget.length);
        return true;
    }
    return false;

}

console.log(confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification"));