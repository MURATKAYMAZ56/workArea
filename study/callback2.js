


var list = [5, 8, 9, 3, 4, 1, 8, 9, 2, 2, 7, 1];


//first, prepare callbakfunc , 
//then make another functioon that calls,
//assigne a variable prepared func to use callback
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


//Function(){ };
