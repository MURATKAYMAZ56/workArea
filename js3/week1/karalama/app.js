
'use strict'


{
    const url = 'https://api.github.com/orgs/HackYourFuture/repos?per_page=100'


    const xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.onload = function fetchJason() {
        const repos = JSON.parse(xhr.responseText);
        console.log(repos);
        for (let i in repos) {
            const repoUrl = repos[i].name + "_url: " + 'https://api.github.com/repos/HackYourFuture/' + repos[i].name;
            console.log(repoUrl);



        };

    };

    xhr.send();

    // const sxhr = new XMLHttpRequest();

    // sxhr.open('GET', surl);












































}