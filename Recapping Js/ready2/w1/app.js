'use strict';
//callback(error,data)
const repoUrl = "https://api.github.com/orgs/HackYourFuture/repos?per_page=100";

function fetchJSON(url, callback) {
    const http = new XMLHttpRequest;
    http.open('GET', url);
    http.responseType = "json";
    http.onreadystatechange = () => {
        if (http.readyState === 4 && http.status < 400) {
            callback(null, http.response);

            //console.log(http.response)


        } else {
            callback(new Error(http.statusText));
            //console.log(http.statusText);

        }
    }
    http.send();
}

function main() {
    fetchJSON(repoUrl, (error, data) => {
        if (error !== null) {
            console.log(error);
            return;
        }
        const repos = data.map(repo => {
            return {
                name: repo.name,
                description: repo.description,
                forks: repo.forks,
                updated_at: repo.updated_at,
                contributors_url: repo.contributors_url

            }

        })
        const root = document.getElementById("root");
        console.log(repos);
        const header = createAndAppend("header", root);
        const main = createAndAppend("main", root);
        main.innerHTML = "<div id= 'leftBar'></div><div id='rightBar'></div>";

        const title = createAndAppend("span", header);
        title.innerHTML = "HYF Repisotiries"
        const select = createAndAppend("select", header);

        repos.forEach(repo => {
            const option = createAndAppend("option", select);
            option.setAttribute("value", JSON.stringify(repo));
            option.innerHTML = repo.name;
        });
        select.addEventListener("change", onChange);









    })
}

function onChange(event) {
    const repo = JSON.parse(event.target.value);
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

    fetchJSON(repo.contributors_url, (error, data) => {
        if (error !== null) {
            console.error(error);
            return;

        }
        //console.log(data);
        const contributors = data.map((contributor) => {
            return {
                name: contributor.login,
                avatar: contributor.avatar_url,
                contributions: contributor.contributions

            };
        });

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


}

function createAndAppend(tagName, parent) {
    const elem = document.createElement(tagName);
    parent.appendChild(elem);
    return elem;


}
main();