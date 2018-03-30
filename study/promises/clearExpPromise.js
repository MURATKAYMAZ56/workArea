
/// lets see idea of resolve///////////////////////
/*
const myPromise = Promise.resolve('foo');

myPromise.then((res) => console.log(res));

*/
/////////////////// more on resolve/////////////////
/*
const myPromise = new Promise(function (resolve, reject) {
    setTimeout(() => resolve(4), 2000);
});
myPromise.then((res) => {
    res += 3;
    console.log(res);
});
*/
//////////////////////////////////////////
//firts make promise function////////

function getData(method, url) {
    return new Promise(function (resolve, reject) {
        const xhr = new XMLHttpRequest();
        xhr.open(method, url);
        xhr.onload = function () {
            if (this.status < 400) {
                resolve(xhr.response);

            } else {
                reject({
                    status: this.status,
                    statusText: xhr.statusText
                });
            }
        };
        xhr.onerror = function () {
            reject({
                status: this.status,
                statusText: xhr.statusText
            });
        };
        xhr.send();


    });
}
/////////////then use the promise///////////////////

getData('GET', 'http://api.nobelprize.org/v1/laureate.json?bornCountryCode=nl').then(
    function (data) {
        console.log(JSON.parse(data));

    }
).catch(
    function (err) {
        console.log(err);

    });

