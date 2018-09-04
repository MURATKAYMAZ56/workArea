function DNAStrand(dna) {
    //your code here
    const nucleus = dna.split("");
    console.log(nucleus);
    const complements = [];
    for (let i in nucleus) {

        if (nucleus[i] === "A") {
            complements.push("T")

        } else if (nucleus[i] === "T") {
            complements.push("A")

        } else if (nucleus[i] === "G") {
            complements.push("C")

        } else if (nucleus[i] === "C") {
            complements.push("G")

        }
    }
    return complements.join("");

}

console.log(DNAStrand("ATTGC"))