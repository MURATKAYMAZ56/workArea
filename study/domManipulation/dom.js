let bookNames = [
    "susam_sokagi",
    "huzur_sokagi",
    "gul_rozet",
    "pembe_panter",
    "ask_ve_gurur",
    "fi",
    "olasiliksiz",
    "life_of_pi",
    "harry_potter",
    "sensiz_olmaz"];
console.log(bookNames);

function generating() {
    let myUl = document.createElement("ul");


    for (let i in bookNames) {
        let book = bookNames[i];
        let myLi = document.createElement("li");
        myLi.innerHTML = book;
        myUl.appendChild(myLi);

    };
    document.body.appendChild(myUl);


}



let bookObject = {
    "susam_sokagi": {
        "title": "Susam",
        "language": "Tr",
        "author": "Murat K",
    },
    "huzur_sokagi": {
        "title": "Huzur",
        "language": "tr,eng",
        "author": "Murat Jhon",
    },
    "gul_rozet": {
        "title": "Gul",
        "language": "turkce",
        "author": "Murat Hans",
    },
    "pembe_panter": {
        "title": "pembe",
        "language": "Dutch",
        "author": "Murat Van Telli",
    },
    "ask_ve_gurur": {
        "title": "Ask",
        "language": "France",
        "author": "De Citroen",
    },
    "fi": {
        "title": "Fi",
        "language": "Turkce",
        "author": "Murat Fi",
    },
    "olasiliksiz": {
        "title": "Olasiliksiz",
        "language": "Spainish",
        "author": "Laexandra Del Pierro",
    },
    "life_of_pi": {
        "title": "Life",
        "language": "Eglish",
        "author": "Murat Ferguson",
    },
    "harry_potter": {
        "title": "Harry",
        "language": "English",
        "author": "Murat harry",
    },
    "sensiz_olmaz": {
        "title": "Sensiz",
        "language": "Turkce",
        "author": "Murat Alemdar",
    }
};

console.log(bookObject);

function render() {
    let ul = document.createElement("ul");
    let book = Object.keys(bookObject);
    //console.log(book);

    for (let i in bookObject) {
        let bookTitle = book.title;
        let h3 = document.createElement("h3");

        let bookLanguage = book.language;
        let bookAuthor = book.author;




        let li = document.createElement("li");
        li.innerHTML = book;
        ul.appendChild(li);

    }
    document.body.appendChild(ul);
}

render();