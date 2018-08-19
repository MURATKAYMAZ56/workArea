//callback(error,data)
function fetchJSON(url, callback) {


    const http = new XMLHttpRequest();
    http.open("GET", URL, true);
    http.responseType = 'json';
    http.onreadystatechange = () => {
        if (http.readyState == 4 && http.status < 400) {
            callback(null, http.response);
        } else {
            callback(new Error(http.statusText));
        };
    }
    http.send();
}

const URL = "https://api.github.com/orgs/HackYourFuture/repos?per_page=100";




function main() {
    fetchJSON(URL, (error, data) => {
        if (error !== null) {
            console.error(error);
            return;

        }
        const repos = data.map((repo) => {
            return {
                name: repo.name,
                description: repo.description,
                forks: repo.forks,
                contributors_url: repo.contributors_url

            }

        });
        const root = document.getElementById("root");
        const header = createAndAppend("header", root);
        const title = createAndAppend("span", header);
        title.innerHTML = "HYF Repositiries";
        const select = createAndAppend("select", header);
        repos.forEach(repo => {
            const option = createAndAppend("option", select);
            option.setAttribute("value", JSON.stringify(repo));
            option.innerHTML = repo.name;
        })
        select.addEventListener("change", onchange);
        const main = createAndAppend("main", root);
        main.innerHTML = "<div id= 'leftBar'></div><div id='rightbar'></div>";





    })

}

function onChange(event) {
    const repo = JSON.parse(event.target.value);
    const reposDetails = "<table>" +
        "<tr>" +
        "<td>Repository:</td>" +
        "<td>" + repo.name + "</td>" +
        "</tr>" +
        "<tr>" +
        "<td>Description:</td>" +
        "<td>" + (repo.description == null ? "" : repo.description) + "</td>" +
        "</tr>" +
        "<tr>" +
        "<td>Forks:</td>" +
        "<td>" + repo.forks + "</td>" +
        "</tr>" +
        "<tr>" +
        "<td>Updated:</td>" +
        "<td>" + repo.updated_at + "</td>" +
        "</tr>" +
        "</table>";
    const leftSideBar = getElementById("leftBar");
    leftSideBar.innerHTML = reposDetails;




}

function createAndAppend(tagName, parent) {
    const elem = document.createElement(tagName);
    parent.appendChild(elem);
    return elem;

}

main();





























// function fetchJSOn(URL, callback) {
//     const http = new XMLHttpRequest();
//     http.open("GET", URL, true);
//     http.responseType = 'json';

//     http.onreadystatechange = () => {
//         if (http.readyState === 4 && http.status === 200) {
//             console.log('response from the server: ' + http.response);
//         }
//     }

//     http.send;
// }
// fetchJSOn(URL, (err) => {
//     console.log(err)
// })






// I. Send a request to a server
// II. Check on the status of a request
// III. Retrieve and parse the response from the request
// IV. Listen   for the onreadystatechange event that 
//helps you react to the status of your request

// const xhr = new XMLHttpRequest();
// xhr.open('GET', url);
// xhr.responseType = 'json';
// xhr.onreadystatechange = () => {
//     if (xhr.readyState === 4) {

//         if (xhr.status < 400) {

//             callback(null, xhr.response);

//         } else {

//             callback(new Error(xhr.statusText), null);
//         }


//     }
// };
// xhr.send();