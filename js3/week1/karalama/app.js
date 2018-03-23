
'use strict'


{
    const url = 'https://api.github.com/orgs/HackYourFuture/repos?per_page=100'
    function fetchJSON(url, cb) {

        const xhr = new XMLHttpRequest();
        xhr.open('GET', url);
        xhr.responseType = 'json';
        xhr.onreadystatechange = () => {
            // console.log(xhr.readyState);
            if (xhr.readyState === 4) {
                if (xhr.status < 400) {
                    console.log(xhr.response);
                    cb(null, xhr.response);
                } else {
                    cb(new Error(xhr.statusText));
                    //console.error(xhr.statusText);
                }

            }
        };
        xhr.send();
    }









































}