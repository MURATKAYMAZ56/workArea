'use strict';
const dataUrl = "http://api.nobelprize.org/v1/laureate.json?"; // url (required), options (optional)
const repoUrl = "https://api.github.com/orgs/HackYourFuture/repos?per_page=100";

// fetch(dataUrl).then(response => {
//     return response.json();
// }).then(data => {

//     console.log(data);
// }).catch(err => {

// });

function main() {
    const root = document.getElementById("root");
    const header = createAndAppend(root, "header");
    const title = createAndAppend(header, "span");
    title.innerHTML = "Nobel Prize Winners";
    const select = createAndAppend(header, "select");
    const option = createAndAppend(select, "option");
    //option.setAttribute("value", )
    option.innerHTML = "hh"

    fetch(dataUrl)
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(err => console.error(err));

}

function createAndAppend(parent, tagName) {
    const elem = document.createElement(tagName);
    parent.appendChild(elem);
    return elem

}
main();