'use strict';
//callback(error,data)
const repoUrl = "https://api.github.com/orgs/HackYourFuture/repos?per_page=100";

function fetchJSON(url) {
    return new Promise(function (resolve, reject) {
        const http = new XMLHttpRequest;
        http.open('GET', url);
        http.responseType = "json";
        http.onreadystatechange = () => {
            if (http.readyState === 4 && http.status < 400) {
                resolve(http.response);

                console.log(http.response)


            } else {
                reject(new Error(http.statusText));
                //console.log(http.statusText);

            }
        }
        http.send();

    })

}

function main() {

    const root = document.getElementById("root");

    const header = createAndAppend("header", root);
    const title = createAndAppend("span", header);
    title.innerHTML = "HYF Repisotiries"
    const select = createAndAppend("select", header);

    fetchJSON(repoUrl)
        .then(repos => {
            repos.forEach((repo, index) => {
                const option = append('option', select);
                option.setAttribute('value', index);
                option.innerHTML = repo.name;
            });

            const main = append('main', root);
            main.innerHTML = "<div id='leftBar'></div><div id='rightBar'></div>";
            select.addEventListener("change", () => onChange(repos[select.value]));
            onChange(repos[0]);
        })
        .catch((err) => {
            console.log(err)

        })

}


function onChange(repo) {

    const repoDetails = `
    <table>
    <tr>
    <td> Repository: ${repo.name} </td>
    </tr>
    <tr>
    <td> Forks: ${repo.forks} </td>
    </tr>
    <tr>
    <td> Updated: ${repo.updated_at} </td>
    </tr>
    </table>`
    const leftBar = document.getElementById("leftBar");
    leftBar.innerHTML = repoDetails;
    const rightBar = document.getElementById("rightBar");
    rightBar.innerHTML = "loading...";

    fetchJSON(repo.contributors_url)
        .then((contributors) => {
            let contributorsHtml = "<table>";

            contributors.forEach(contributor => {
                contributorsHtml += "<tr>" +
                    "<td><img src='" + contributor.avatar + "'/></td>" +
                    "<td>" + contributor.name + "</td>" +
                    "<td>" + contributor.contributions + "</td>" +
                    "</tr>";
            });

            contributorsHtml += "</table>";
            rightBar.innerHTML = contributorsHtml;

        })
        .catch((err) => {
            console.log(err);
        })
    //console.log(data);









}

function createAndAppend(tagName, parent) {
    const elem = document.createElement(tagName);
    parent.appendChild(elem);
    return elem;


}

window.onload = main();