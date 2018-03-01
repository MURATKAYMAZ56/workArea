
//p1-2
let books = ["missing_presumed",
    "the_great_alone",
    "fifty_fifty",
    "dark_matter",
    "the_winter_people",
    "obama_an_intimate_portrait",
    "lilac_girls",
    "the_girl_before_a_novel",
    "the_woman_in_the_window",
    "the_hazel_wood"];




//p3

// function generating() {

//     let ul = document.createElement("ul");


//     for (var i in books) {

//         let book = books[i];

//         let li = document.createElement("li");

//         li.innerHTML = book;
//         ul.appendChild(li);
//     }

//     document.body.appendChild(ul);
// }




//p4
let bookDetails = {
    "missing_presumed": {
        "title": "Missing, Presumed",
        "language": "English",
        "author": "Susie Steiner"
    },
    "the_great_alone": {
        "title": "The G`reat` Alone",
        "language": "English",
        "author": "Kristin Hannah"
    },
    "fifty_fifty": {
        "title": "Fifty Fifty",
        "language": "English",
        "author": "James Patterson, Candice Fox"
    },
    "dark_matter": {
        "title": "Dark Matter",
        "language": "English",
        "author": "Blake Crouch"
    },
    "the_winter_people": {
        "title": "The Winter People",
        "language": "English",
        "author": "Jennifer McMahon"
    },
    "obama_an_intimate_portrait": {
        "title": "Obama: An Intimate Portrait",
        "language": "English",
        "author": "Pete Souza"
    },
    "lilac_girls": {
        "title": "Lilac Girls",
        "language": "English",
        "author": "Martha Hall Kelly"
    },
    "the_girl_before_a_novel": {
        "title": "The Girl Before: A Novel",
        "language": "English",
        "author": "JP Delaney"
    },
    "the_woman_in_the_window": {
        "title": "The Woman in the Window",
        "language": "English",
        "author": "A. J. Finn"
    },
    "the_hazel_wood": {
        "title": "The Hazel Wood",
        "language": "English",
        "author": "Melissa Albert"
    }

};




//p5
// function render() {
//     let ul = document.createElement("ul");
//     for (let i in books) {
//         
//         let book = books[i];
//         let bookDetail = bookDetails[book];
//         let title = bookDetail.title;
//         let language = bookDetail.language;
//         let author = bookDetail.author;

//         let li = document.createElement("li");

//         let elementTitle = document.createElement("h3");
//         elementTitle.innerHTML = title;

//         let elementLanguage = document.createElement("span");
//         elementLanguage.innerHTML = language;

//         let elementAuthor = document.createElement("p");
//         elementAuthor.innerHTML = author;


//         elementTitle.appendChild(elementLanguage);

//         li.appendChild(elementTitle);
//         li.appendChild(elementAuthor);
//         ul.appendChild(li);
//     }
//     document.body.appendChild(ul);
// }


//P7
let bookImages = {
    "missing_presumed": "img/missing_presumed.jpg",
    "the_great_alone": "img/the_great_alone.jpg",
    "fifty_fifty": "img/fifty_fifty.jpg",
    "dark_matter": "img/dark_matter.jpg",
    "the_winter_people": "img/the_winter_people.jpg",
    "obama_an_intimate_portrait": "img/obama_an_intimate_portrait.jpg",
    "lilac_girls": "img/lilac_girls.jpg",
    "the_girl_before_a_novel": "img/the_girl_before_a_novel.jpg",
    "the_woman_in_the_window": "img/the_woman_in_the_window.jpg",
    "the_hazel_wood": "img/the_hazel_wood.jpg"
};
//p6-7
function render() {
    let ul = document.createElement("ul");
    for (let i in books) {

        let book = books[i];

        let bookDetail = bookDetails[book];
        let title = bookDetail.title;
        let language = bookDetail.language;
        let author = bookDetail.author;


        let li = document.createElement("li");
        li.setAttribute("id", book);

        let elementTitle = document.createElement("h3");
        elementTitle.innerHTML = title;

        let elementLanguage = document.createElement("span");
        elementLanguage.innerHTML = language;

        let elementAuthor = document.createElement("p");
        elementAuthor.innerHTML = author;


        elementTitle.appendChild(elementLanguage);

        li.appendChild(elementTitle);

        li.appendChild(elementAuthor);

        ul.appendChild(li);


    }

    document.body.appendChild(ul);

}

function renderImages() {

    var bookImagesKeys = Object.keys(bookImages);

    for (var i in bookImagesKeys) {

        let bookImagesKey = bookImagesKeys[i];

        let li = document.getElementById(bookImagesKey);

        let img = document.createElement("img");
        img.src = bookImages[bookImagesKey];

        li.insertBefore(img, li.firstChild);

    }

}

render();

renderImages();