function repeatStringNumTimes(str, num) {
    // repeat after me
    if (num > 0) {
        for (let i = 0; i < num; i++) {
            return str.repeat(num);
        }

    }
    return "";
}

repeatStringNumTimes("abc", 2);
