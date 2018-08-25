// const fetch = require('node-fetch');
const hyfUrl = "https://api.github.com/orgs/HackYourFuture/repos?per_page=100"

async function fetchAvatarUrl(userId) {
    const response = await fetch(userId);
    const data = await response.json();

    //console.log(data);
    return data.contributors_url;

}

const result = fetchAvatarUrl(hyfUrl);
console.log(fetchAvatarUrl(hyfUrl));