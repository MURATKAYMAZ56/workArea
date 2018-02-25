let books = ["The_Great_Alone_A_Novel", "AnAmerican_Marriage A_Novel ", "The_Great_Alone_A_Novel2",
    "The_Great_Alone_A_Novel3", "The_Great_Alone_A_Novel4", "The_Great_Alone_A_Novel5", "The_Great_Alone_A_Novel6"]
console.log(books);


function generating() {

    var ul = document.createElement("ul");
    document.body.appendChild(ul);
    for (let i in books) {
        var li = document.createElement("li");
        ul.appendChild(li);
        li.textContent += books[i];
        // li.setAttribute(id, mjjj);




    }
}
generating();