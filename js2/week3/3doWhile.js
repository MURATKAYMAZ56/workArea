
// with for loop
function repeatStringNumTimes(str, num) {


    for (let i = 0; i < num; i++) {
        console.log(str.repeat(num));
    }


    return "";
}

//wth while loop
function repeatStringNumTimes(str, num) {

    let i = 1;
    while (i <= num) {
        console.log(str.repeat(num));
        i++;
    }
    return "";
}


//with do while loop
function repeatStringNumTimes(str, num) {

    let i = 1;
    do {
        console.log(str.repeat(num));
        i++;
    } while (i <= num)
    return "";
}

repeatStringNumTimes("abc", 2);
