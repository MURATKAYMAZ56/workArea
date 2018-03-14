function repeatStringNumTimes(str, num) {

    let i = 1;
    while (i <= num) {
        console.log(str.repeat(num));
        i++;
    }
    return "";
}

repeatStringNumTimes("abc", 2);
