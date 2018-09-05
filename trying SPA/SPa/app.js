const NobelUrl = "http://api.nobelprize.org/v1/laureate.json?";
const options = [{
        value: "femaleLaurates",
        text: "All Female Laurates"
    },
    {
        value: "allDutch",
        text: "All Dutch Laurates"
    },
    {
        value: "physicsLaurates",
        text: "All Physics Laurates"
    }

];
fetch(NobelUrl)
    .then(response =>
        response.json()
    ).then(data => main(data.laureates))
    .catch(err => console.error(err));

function main(data) {

    const select = document.querySelector("#selectOptions");
    select.addEventListener("change", (event) => {
        onSelectChange(event, data);
    });

    options.forEach((option, index) => {
        const elem = createAndAppend(select, "option");

        elem.setAttribute("value", option.value);
        elem.innerHTML = option.text;

    });


    //console.log(select);
    //console.log(data)




}

function onSelectChange(event, data) {
    const target = event.target.value;
    const container = document.querySelector("#container");
    if (target === options[0].value) {
        //females
        console.log(data)
        for (let i in data) {
            const laurate = data[i];

            if (laurate.gender === "female") {

                const div = createAndAppend(container, "div");

                let prizeHTML = "";
                laurate.prizes.forEach(prize => {
                    prizeHTML += `<li>${prize.year},${prize.category}<br>${prize.motivation}</li>`

                })

                div.innerHTML = `<table>
                <tr> <td>Name: </td><td>${laurate.firstname + " " + laurate.surname}</td> </tr>
                <tr> <td> Born: </td><td>${laurate.born}</td> </tr>
                <tr> <td> Died: </td><td>${laurate.died}</td> </tr>
                <tr><td> Prizes:</td><td><ul>${prizeHTML}</ul></td></tr>
                                </table>`

            }

        }




    } else if (target === options[1].value) {
        //alldutchs



    } else if (target === options[2].value) {
        //physics



    }


}

function createAndAppend(parent, tagName) {
    const elem = document.createElement(tagName);
    parent.appendChild(elem);
    return elem;
}