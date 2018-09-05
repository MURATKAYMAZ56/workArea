function longest(s1, s2) {

    const s1Splited = s1.split("");
    const s2Splited = s2.split("");
    const long = s1Splited;
    for (let i in s1Splited) {
        for (let j in s2Splited) {
            if (s1Splited[i] != s2Splited[j]) {

            }

        }
    }

    // your code
}
longest("aretheyhere", "yestheyarehere")
/*
Take 2 strings s1 and s2 including only letters from ato z.
Return a new sorted string, the longest possible, containing distinct letters,
each taken only once - coming from s1 or s2.#Examples: ``
` a = "xyaabbbccccdefww" b = "xxxxyyyyabklmopq" longest(a, b) -> "abcdefklmopqwxy"

*/