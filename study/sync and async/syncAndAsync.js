'use strict';
window.onload = function () {

    const url = "http://api.nobelprize.org/v1/prize.json?year=2000&yearTo=2018&category=physics";

    const http = new XMLHttpRequest();

    http.open('GET', url, true); // true makes ASYNC function says that dont wait keep going when it is ready will be shown

    http.onreadystatechange = function () {

        if (http.readyState === 4) {

            console.log(JSON.parse(http.response));

        }

    };

    http.send();

};
console.log('now first this massage is gonna be shown then'
    + '  array will be shown because of we write true in function' +
    ' so it wont wait to retrive data ');

