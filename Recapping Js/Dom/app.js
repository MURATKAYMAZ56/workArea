const button = document.querySelector("button");
button.addEventListener("click", () => {
    console.log("you clicked me ");
    //event.preventDefault();
})


window.addEventListener("keydown", event => {
    if (event.key == "v") {
        document.body.style.background = "violet";
    }
});
window.addEventListener("keyup", event => {
    if (event.key == "v") {

        document.body.style.background = "";
    }
});