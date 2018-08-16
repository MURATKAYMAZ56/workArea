let books = [
    'fire_and_fury: _inside_the_trump_white_house',
    'a_higher_loyalty:_truth,_lies,_and_leadership_',
    'the_president_is_missing',
    'last_week_tonight_with_john_oliver_presents_a_day_in_the_life_of_marlon_bundo',
    'the_woman_in_the_window_'
]
////////////////////////////////// converting string tp lowecase and inserting _ in between
// let newBooks = [];

// for (let i in books) {
//     //console.log(books[i])
//     newBooks.push(books[i].toLocaleLowerCase().replace(/ /gi, "_"));
//     //console.log(newBooks)

// }
// console.log(newBooks);
//////////////////////////////////////////////////////////
//console.log(books);

const booksDetails = {
    'fire_and_fury: _inside_the_trump_white_house': {
        "title": "Fire and Fury: Inside the Trump White House",
        "language": "Tr",
        "author": "Jon Jon"


    },
    'a_higher_loyalty:_truth,_lies,_and_leadership_': {
        "title": "A Higher Loyalty: Truth, Lies, and Leadership ",
        "language": "Eng",
        "author": "Abigal Ahmo"
    },
    'the_president_is_missing': {
        "title": "The President Is Missing",
        "language": "Eng",
        "author": "Steve Steve"
    },
    'last_week_tonight_with_john_oliver_presents_a_day_in_the_life_of_marlon_bundo': {
        "title": "Last Week Tonight with John Oliver Presents A Day in the Life of Marlon Bundo",
        "language": "Spainish",
        "author": "Alexandro T"
    },
    'the_woman_in_the_window_': {
        "title": "The Woman in the Window ",
        "language": "Fr",
        "author": "Henry Henry"


    }
}
const bookCovers = {
    "a_higher_loyalty:_truth,_lies,_and_leadership_": "./img/a_higher_loyalty:_truth,_lies,_and_leadership_",
    "fire_and_fury: _inside_the_trump_white_house": "./img/fire_and_fury: _inside_the_trump_white_house",
    "last_week_tonight_with_john_oliver_presents_a_day_in_the_life_of_marlon_bundo": "./img/last_week_tonight_with_john_oliver_presents_a_day_in_the_life_of_marlon_bundo",
    "the_president_is_missing": "./img/the_president_is_missing",
    "the_woman_in_the_window_": "./img/the_woman_in_the_window_"


}


function generate() {
    let ul = document.createElement("ul");
    for (let i in books) {

        let book = books[i];
        let bookDetail = booksDetails[book];
        //console.log(bookDetail);
        let title = bookDetail.title;
        let language = bookDetail.language;
        let author = bookDetail.author;

        let li = document.createElement("li");
        //li.innerHTML = book;

        li.setAttribute("id", book)
        let elementTitle = document.createElement("h3");
        elementTitle.innerHTML = title
        let elementLanguage = document.createElement("span");
        let elementAuthor = document.createElement("p");
        elementLanguage.innerHTML = language;
        elementAuthor.innerHTML = author;
        elementTitle.appendChild(elementLanguage);
        li.appendChild(elementTitle);
        li.appendChild(elementAuthor);



        ul.appendChild(li);

    }
    document.body.appendChild(ul);

}

function renderImg() {
    let booksCoversKeys = Object.keys(bookCovers);
    for (let i in booksCoversKeys) {
        let bookCoverKey = booksCoversKeys[i];
        let li = document.getElementById(bookCoverKey);
        let img = document.createElement("img");
        img.src = bookCovers[bookCoverKey];
        li.insertBefore(img, li.firstChild);


    }
}
generate();
renderImg();