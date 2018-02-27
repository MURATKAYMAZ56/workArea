// 1.
let books = [
    "missing_presumed",
    "the_great_alone",
    "fifty_fifty",
    "dark_matter",
    "the_winter_people",
    "obama_an_intimate_portrait",
    "lilac_girls",
    "the_girl_before_a_novel",
    "the_woman_in_the_window",
    "the_hazel_wood"
];

// 4.
let bookDetails = {
    "missing_presumed" : {
        "title"     : "Missing, Presumed",
        "language"  : "English",
        "author"    : "Susie Steiner"
    },
    "the_great_alone" : {
        "title"     : "The Great Alone",
        "language"  : "English",
        "author"    : "Kristin Hannah"
    },
    "fifty_fifty" : {
        "title"     : "Fifty Fifty",
        "language"  : "English",
        "author"    : "James Patterson, Candice Fox"
    },
    "dark_matter" : {
        "title"     : "Dark Matter",
        "language"  : "English",
        "author"    : "Blake Crouch"
    },
    "the_winter_people" : {
        "title"     : "The Winter People",
        "language"  : "English",
        "author"    : "Jennifer McMahon"
    },
    "obama_an_intimate_portrait" : {
        "title"     : "Obama: An Intimate Portrait",
        "language"  : "English",
        "author"    : "Pete Souza"
    },
    "lilac_girls" : {
        "title"     : "Lilac Girls",
        "language"  : "English",
        "author"    : "Martha Hall Kelly"
    },
    "the_girl_before_a_novel" : {
        "title"     : "The Girl Before: A Novel",
        "language"  : "English",
        "author"    : "JP Delaney"
    },
    "the_woman_in_the_window" : {
        "title"     : "The Woman in the Window",
        "language"  : "English",
        "author"    : "A. J. Finn"
    },
    "the_hazel_wood" : {
        "title"     : "The Hazel Wood",
        "language"  : "English",
        "author"    : "Melissa Albert"
    }
};



// 7.
let bookImages = {
    "missing_presumed"              : "img/missing_presumed.jpg",
    "the_great_alone"               : "img/the_great_alone.jpg",
    "fifty_fifty"                   : "img/fifty_fifty.jpg",
    "dark_matter"                   : "img/dark_matter.jpg",
    "the_winter_people"             : "img/the_winter_people.jpg",
    "obama_an_intimate_portrait"    : "img/obama_an_intimate_portrait.jpg",
    "lilac_girls"                   : "img/lilac_girls.jpg",
    "the_girl_before_a_novel"       : "img/the_girl_before_a_novel.jpg",
    "the_woman_in_the_window"       : "img/the_woman_in_the_window.jpg",
    "the_hazel_wood"                : "img/the_hazel_wood.jpg"
};

/* 3.
function render(){

    let ul = document.createElement("ul");

  //  <ul>

    for(var i in books){

        let book = books[i];

        var node = document.createElement("li");  

        // <li>
        
        node.innerHTML = book;
        
        ul.appendChild(node);

    }

    document.body.appendChild(ul);

}*/

/* 5.
function render(){

    let ul = document.createElement("ul");

    for(var i in books){

        let book = books[i];

        let bookDetail = bookDetails[book];

        let title = bookDetail.title;
        let author = bookDetail.author;
        let language = bookDetail.language;

        var node = document.createElement("li");

        var elementTitle = document.createElement("h3");
        elementTitle.innerHTML = title;

        var elementLanguage = document.createElement("span");
        elementLanguage.innerHTML = language;

        var elementAuthor = document.createElement("p");
        elementAuthor.innerHTML = author;

        elementTitle.appendChild(elementLanguage);

        node.appendChild(elementTitle);
        node.appendChild(elementAuthor);
        
        ul.appendChild(node);

    }

    document.body.appendChild(ul);

}
*/

// 6-7.
function render(){

    let ul = document.createElement("ul"); // create element with "ul" tag @ DOM

    for(var i in books){ // loop over books array

        let book = books[i]; // get book by index

        let bookDetail = bookDetails[book]; // get book detail by book which is id

        let title = bookDetail.title; // get book title field of bookDetail
        let author = bookDetail.author; // get book author field of bookDetail
        let language = bookDetail.language; // get book language field of bookDetail

        var node = document.createElement("li"); // create element with "li" tag @ DOM
        node.setAttribute("id", book);  // set "id" attribute of created element as book

        var elementTitle = document.createElement("h3"); // create element with "h3" tag @ DOM
        elementTitle.innerHTML = title; // set text of element as book title

        var elementLanguage = document.createElement("span"); // create element with "span" tag @ DOM
        elementLanguage.innerHTML = language; // set text of element as book language

        var elementAuthor = document.createElement("p"); // create element with "p" tag @ DOM
        elementAuthor.innerHTML = author; // set text of element as book author

        elementTitle.appendChild(elementLanguage); // add element language to element title

        node.appendChild(elementTitle); // add element title to node which is "li"
        node.appendChild(elementAuthor); // add element author to node which is "li"
        
        ul.appendChild(node); // add node to "ul" element

    }

    document.body.appendChild(ul); // add "ul" element to document.body

}

function renderImages(){

    var bookImagesKeys = Object.keys(bookImages); // get key/field of bookImages array as array

    for(var i in bookImagesKeys){ // loop over bookImagesKeys array

        let bookImagesKey = bookImagesKeys[i]; // get bookImagesKey by index

        let li = document.getElementById(bookImagesKey); // get "li" element by bookImagesKey id attribute

        let img = document.createElement("img"); // create element with "img" tag @ DOM
        img.src = bookImages[bookImagesKey]; // set source of image element as bookImage

        li.insertBefore(img, li.firstChild); // add prepend element to "li" tag

    }

}

render();

renderImages();