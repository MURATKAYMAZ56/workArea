'use strict'

const root = document.getElementById('root');

const div = document.createElement('div');
root.appendChild(div);

const select = document.createElement('select');
div.appendChild(select);

const hyfRepo = 'https://api.github.com/orgs/HackYourFuture/repos?per_page=100';

function getJson(url) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.send();
    xhr.responseType = 'json';
    xhr.onload = function () {
        const data = xhr.response;
        for (let i = 0; i < data.length; i++) {
            const repoName = data[i].name;
            console.log(repoName);
            const option = document.createElement('option');
            select.appendChild(option);
            option.innerHTML = repoName;
            select.addEventListener('change', function () {
                const repoUrl = 'https://api.github.com/repos/HackYourFuture/' + repoName[this.selectedIndex];
                option.setAttribute('value', repoUrl);
                console.log(this.selectedIndex);
                window.open(repoUrl);
            })


        }
    }
    xhr.onerror = function () {
        console.log(xhr.statusText);
    }
}

getJson(hyfRepo);

           // option.addEventListener('change', function () {
            //     option.innerHTML = repoName;
            //     const anchor = document.createElement('a');
            //     option.appendChild(anchor);
            //     anchor.setAttribute('href', repoUrl);
            // });
