function factorialize(num) {
    let fac = 1;
    let i = 1;
    if (num === 0) {
        return fac;
    }
    while (i <= num) {
        fac = fac * i;
        i++;

    }

    return fac;
}

factorialize(5);
console.log(factorialize(9));