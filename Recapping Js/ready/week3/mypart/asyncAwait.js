// const hyfRepoUrl = "https://api.github.com/orgs/HackYourFuture/repos?per_page=100"

// function fetchJSON(method, url) {
//     return new Promise(function (resolve, reject) {
//         const http = new XMLHttpRequest;
//         http.open(method, url);
//         http.responseType = "json";
//         http.onreadystatechange = () => {
//             if (http.readyState === 4 && http.status < 400) {
//                 resolve(http.response);
//                 console.log(http.response);
//             } else {
//                 reject(new Error(http.statusText));
//             }
//         };
//         http.send();

//     });
// }

// fetchJSON("GET", hyfRepoUrl);


// function createAppend(tagName, parent) {
//     const elem = document.createElement(tagName);
//     parent.appendChild(elem);
//     return elem;
// }

// class View {
//     constructor() {
//         this.initialize();
//     }
//     async initialize() {
//         const root = document.getElementById("root");
//         const header = createAppend("header", root);
//         const title = createAppend("span", header);
//         title.innerHTML = "HYF REPOS";
//         const select = ("select", header);
//         const main = createAppend("main", root);
//         main.innerHTML = `<div id="leftBar"></div><div id="rightBar"></div>`

//         try {
//             let repositories = await this.fetchJSON(hyfRepoUrl);

//             repositories = repositories.map(repo => new Repositories(repo));

//             repositories.forEach((repo, index) => {
//                 const option = createAppend("option", select);
//                 option.setAttribute("value", index);
//                 option.innerHTML = repo.name();

//             });
//             select.addEventListener("change", () => this.fetchAndRender(repositories[select.value]))
//         } catch (error) {
//             console.log(err);
//         }
//     }
//     async fetchAndRender(repo) {
//         const leftBar = document.getElementById("leftBar");
//         const contributorList = document.getElementById("contributors");
//         contributorList.innerHTML = "";
//         try {
//             const contributors = await repo.fetchContributors();
//             repo.render(leftBar);
//             contributors
//                 .map(contributor => new Contributor(contributor))
//                 .forEach(contributor => contributor.render(contributorList));

//         } catch (error) {
//             console.log(error);
//         }
//         fetchJSON(url) {
//             return fetchJSON('get', url)
//         }

//     }

// }




// class Repositories {
//     constructor(data) {
//         this._data = data;
//     }
//     render(parent) {
//         const repoDetailsHtml = "<table>" +
//             "<tr>" +
//             "<td>Repository:</td>" +
//             "<td>" + this.name() + "</td>" +
//             "</tr>" +
//             "<tr>" +
//             "<td>Description:</td>" +
//             "<td>" + (this._data.description == null ? "" : this._data.description) + "</td>" +
//             "</tr>" +
//             "<tr>" +
//             "<td>Forks:</td>" +
//             "<td>" + this._data.forks + "</td>" +
//             "</tr>" +
//             "<tr>" +
//             "<td>Updated:</td>" +
//             "<td>" + this._data.updated_at + "</td>" +
//             "</tr>" +
//             "</table>";
//         parent.innerHTML = repoDetailsHtml
//     }

//     fetchContributors() {
//         return fetchJSON('get', this._data.contributors_url);
//     }

//     name() {
//         return this._data.name;
//     }



// }

// class Contributor {
//     constructor(data) {
//         this._data = data;
//     }
//     render(parent) {
//         const html = "<td><img src='" + this._data.avatar_url + "'/></td>" +
//             "<td>" + this._data.login + "</td>" +
//             "<td>" + this._data.contributions + "</td>";
//         const row = document.createElement("tr");
//         row.innerHTML = html;
//         parent.appendChild(row);
//     }

// }




// window.onload = new View();