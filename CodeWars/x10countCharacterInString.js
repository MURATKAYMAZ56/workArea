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
/////////////////////////////////////////////////
function count(string) {
    return string.split('').reduce(function (a, b) {
        return a[b] = a[b] ? ++a[b] : 1, a;
    }, {});
}
//////////////////////////////////////////////////
function count(string) {
    var result = {};

    for (let i = 0; i < string.length; i++) {
        if (result.hasOwnProperty(string[i])) {
            result[string[i]] += 1;
        } else {
            result[string[i]] = 1;
        }
    }

    return result;
}
/////////////////////////////////////////////////
function count(string) {
    var newString = string.toLowerCase();
    var characterCount = {};
    var alphabets = "abcdefghijklmnopqrstuvwxyz";

    function countPos(char) {
        var count = 0;
        var pos = newString.indexOf(char);
        while (pos !== -1) {
            count++;
            pos = newString.indexOf(char, pos + 1);
        }
        return count;
    }
    for (var i = 0; i < alphabets.length; i++) {
        var value = countPos(alphabets.charAt(i));
        if (value) {
            characterCount[alphabets.charAt(i)] = value;
        }
    }
    return characterCount;
}