'use strict';
const dataUrl = "http://api.nobelprize.org/v1/prize.:format";

function fetchJson(url, callback) {
    const data = new XMLHttpRequest();
    data.open('GET', url);
    data.responseType = 'json';
    data.onreadystatechange = () => {
        if (data.readyState === 4) {
            if (data.status < 400) {

                callback(null, data.response);

            } else {
                callback(new Error(status.text), null);

            }

        }
    };
    data.send();

}
function () {
    fetchJson()
}
