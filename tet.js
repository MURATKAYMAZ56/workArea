function titleCase(str) {
    const stringWords = str.split(" ");
    const sentence = [];
    console.log(stringWords);
    for (let i in stringWords) {
        const part1 = stringWords[i].slice(0, 1).toUpperCase();
        console.log(part1);
        const part2 = stringWords[i].slice(1).toLowerCase();
        console.log(part2);
        sentence.push(part1.concat(part2));


        //console.log(i);


    }

    return sentence.join(" ");

}


console.log(titleCase("HERE IS MY HANDLE HERE IS MY SPOUT"))