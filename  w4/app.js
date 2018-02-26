
/*p1-2
let books = ["missing_presumed",
    "the_great_alone",
    "fifty_fifty",
    "dark_matter",
    "the_winter_people",
    "obama_an_intimate_portrait",
    "lilac_girls",
    "the_girl_before_a_novel",
    "the_woman_in_the_window",
    "the_hazel_wood"]
console.log(books);
*/


/*p3

function generating() {

    let ul = document.createElement("ul");
    document.body.appendChild(ul);

    for (let i in books) {
        let li = document.createElement("li");
        ul.appendChild(li);
        li.textContent += books[i];
    }
}
generating();
*/


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

}
console.log(bookDetails);

function render() {
    let ul = document.createElement("ul");
    for (let i in bookDetails) {
        ;
        let book = books[i];
        let bookDetail = bookDetails[i];
        let title = bookDetail.title;
        let language = bookDetail.language;
        let author = bookDetail.author;

        let li = document.createElement("li");
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