

var list = [5, 8, 9, 3, 4, 1, 8, 9, 2, 2, 7, 1];

function callback(list) {

    var newList = [];

    for (let i in list) {

        if (list[i] < 5) {
            newList.push(list[i]);
        };
    }
    return newList;
};

function filter(list, callback) {
    return callback(list);

};
var filtered = filter(list, callback);
console.log(filtered);
