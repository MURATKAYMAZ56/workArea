// 'use strict'
// var myCat = {
//     "name": "Mewwsalat",
//     "species": "cat",
//     "facFood": "tuna",
// };
// var myFAcColors = ['blue', 'green', 'purple'];


// var thePets = [
//     {
//         "name": "Mewwsalat",
//         "species": "cat",
//         "facFood": "tuna",
//     },
//     {
//         "name": "Barky",
//         "species": "dog",
//         "facFood": "carrots",
//     },


// ] 

var pageCounter = 1;
const animalContainer = document.getElementById('animal-info');
const root = document.getElementById('root');
const div = document.createElement('div');
root.appendChild(div);
const button = document.createElement('button');
button.setAttribute("id", "btn")
root.appendChild(button);
button.setAttribute("value", "jhjdhjdh")
const btn = document.getElementById('btn');
btn.addEventListener("click", function () {
    const ourRequest = new XMLHttpRequest();
    const url = "https://learnwebcode.github.io/json-example/animals-" + pageCounter + ".json";
    ourRequest.open('GET', url);
    ourRequest.onload = function () {
        //console.log(ourRequest.responseText) //shows what i requested from site
        //var ourData = ourRequest.responseText;// if you do just like this,
        //our page will know it as a giant text, so you have tell it it is JSON.
        var ourData = JSON.parse(ourRequest.responseText);
        console.log(ourData[0]);
        renderHtml(ourData);
    };
    ourRequest.send();
    pageCounter++;
    if (pageCounter > 3) {
        btn.classList.add("hide-me")

    }

});
function renderHtml(data) {
    var htmlString = "";
    for (let i = 0; i < data.length; i++) {
        htmlString += "<p>" + data[i].name + " is a " + data[i.species + "</p>"];

    }
    animalContainer.insertAdjacentHTML("beforeend", htmlString);


}