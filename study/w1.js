let books = [
    "the_greata_alone",
    "an_american_marriage",
    "milk_and_honey",
    "the_hate_u_give",
    "wonder",
    "love_from_the_very_hungry_caterpillar",
    "pete_the_cat",
    "little_leaders:",
    "turtles_all_the_way_down",
    "diary_of_a_wimpy_kid"


];
// let bookks = [
//     "The Great Alone",
//     "An American Marriage",
//     "Milk and Honey",
//     "The Hate U Give",
//     "Wonder"
//     "Love from The Very Hungry Caterpillar",
//     "Pete the Cat",
//     "Little Leaders:",
//     "Turtles All the Way Down",
//     "Diary of a Wimpy Kid"
// ];


/*
//p3
function generating() {
    let ul = document.createElement("ul");
    for (let i in books) {
        var book = books[i];
        var li = document.createElement("li");
        li.innerHTML = book;
        ul.appendChild(li);

    }
    document.body.appendChild(ul);


}
generating();

*/

var booksDetails = {
    "the_greata_alone": {
        "title": "The Great Alone",
        "language": "English",
        "author": "Kristin Hannah"
    },
    "an_american_marriage": {
        "title": "An American Marriage",
        "language": "English",
        "author": "Tayari Jones"
    },
    "milk_and_honey": {
        "title": "An American Marriage",
        "language": "English",
        "author": "Rupi Kaur"
    },
    "the_hate_u_give": {
        "title": "An American Marriage",
        "language": "English",
        "author": "Angie Thomas"
    },
    "wonder": {
        "title": "An American Marriage",
        "language": "English",
        "author": "R. J. Palacio"
    },
    "love_from_the_very_hungry_caterpillar": {
        "title": "An American Marriage",
        "language": "English",
        "author": "Eric Carle"
    },
    "pete_the_cat": {
        "title": "An American Marriage",
        "language": "English",
        "author": "James Dean, Kimberly Dean"
    },
    "little_leaders": {
        "title": "An American Marriage",
        "language": "English",
        "author": "Vashti Harrison"
    },
    "turtles_all_the_way_down": {
        "title": "An American Marriage",
        "language": "English",
        "author": "John Green"
    },
    "diary_of_a_wimpy_kid": {
        "title": "An American Marriage",
        "language": "English",
        "author": "Jeff Kinney"
    },

};

function generating() {
    let ul = document.createElement("ul");
    for (let i in books) {
        var book = books[i];
        var li = document.createElement("li");
        li.setAttribute("id", book);

        var bookDetail = booksDetails[book];
        var title = bookDetail.title;
        var language = bookDetail.language;
        var author = bookDetail.author;

        var h3 = document.createElement("h3")
        h3.innerHTML = title;
        let elementLanguage = Document.createElement("span");
        elementLanguage.innerHTML = language;
        let elementAuthor = document.createElement("p");
        elementAuthor.innerHTML = author;

        h3.appendChild(elementLanguage);
        li.appendChild(h3);
        li.appendChild(elementAuthor);

        ul.appendChild(li);

    };
    document.body.appendChild(ul);


};


let bookImages = {
    "the_greata_alone": "img/an_american_marriage.jpg",
    "an_american_marriage": "img/an_american_marriage",
    "milk_and_honey": "img/milk_and_honey",
    "the_hate_u_give": "img/the_hate_u_give",
    "wonder": "img/wonder",
    "love_from_the_very_hungry_caterpillar": "img/love_from_the_very_hungry_caterpillar",
    "pete_the_cat": "img/pete_the_cat",
    "little_leaders:": "img/little_leaders",
    "turtles_all_the_way_down": "img/turtles_all_the_way_down",
    "diary_of_a_wimpy_kid": "img/diary_of_a_wimpy_kid"


};
function renderImages() {

    var bookImagesKeys = Object.keys(bookImages);

    for (var i in bookImagesKeys) {

        let bookImagesKey = bookImagesKeys[i];

        let li = document.getElementById(bookImagesKey);

        let img = document.createElement("img");
        img.src = bookImages[bookImagesKey];

        li.insertBefore(img, li.firstChild);

    };

};

generating();

renderImages();


