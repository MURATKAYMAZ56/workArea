// The main idea is to count all the occuring characters(UTF - 8) 
//in string.If you have string like this aba then the result 
//should be {
//     'a': 2,
//     'b': 1
// }

// What
// if the string is empty ? Then the result should be empty object literal {}
// exp:  count("aba"), { a: 2, b: 1 }); 
//       count(""), {});



function count(string) {
    return string.split("").reduce(function (obj, elem) {
        if (elem in obj)
            obj[elem]++;
        else
            obj[elem] = 1;
        return obj;
    }, {});
}
console.log(count("abaa"))

///////////////////////////////////////////
function count(string) {
    var obj = {};
    string = string.split('').forEach(function (x) {
        obj[x] = obj[x] ? obj[x] + 1 : 1;
    });
    return obj;
}