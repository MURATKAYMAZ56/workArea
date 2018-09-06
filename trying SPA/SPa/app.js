const NobelUrl = "http://api.nobelprize.org/v1/laureate.json?";
const options = [{
        value: "femaleLaureates",
        text: "All Female Laureates"
    },
    {
        value: "allDutch",
        text: "All Dutch Laureates"
    },
    {
        value: "physicsLaureates",
        text: "All Physics Laureates"
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
            const laureate = data[i];

            if (laureate.gender === "female") {

                const div = createAndAppend(container, "div");

                let prizeHTML = "";
                laureate.prizes.forEach(prize => {
                    prizeHTML += `<li>${prize.year},${prize.category}<br>${prize.motivation}</li>`

                })

                div.innerHTML = `<table>
                <tr> <td><b>Name: </b></td><td>${laureate.firstname + " " + laureate.surname}</td> </tr>
                <tr> <td> <b>Born:</b> </td><td>${laureate.born}</td> </tr>
                <tr> <td> <b>Died: </b></td><td>${laureate.died}</td> </tr>
                <tr><td><b> Prizes:</b></td><td><ul>${prizeHTML}</ul></td></tr>
                                </table>`

            }

        }




    } else if (target === options[1].value) {
        //alldutchs
        for (let i in data) {
            const laureate = data[i];

            if (laureate.bornCountryCode === "NL") {

                const div = createAndAppend(container, "div");

                let prizeHTML = "";
                laureate.prizes.forEach(prize => {
                    prizeHTML += `<li>${prize.year},${prize.category}<br>${prize.motivation}</li>`

                })

                div.innerHTML = `<table>
                <tr> <td><b>Name: </b></td><td>${laureate.firstname + " " + laureate.surname}</td> </tr>
                <tr> <td> <b>Born:</b> </td><td>${laureate.born}</td> </tr>
                <tr> <td> <b>Died: </b></td><td>${laureate.died}</td> </tr>
                <tr><td><b> Prizes:</b></td><td><ul>${prizeHTML}</ul></td></tr>
                                </table>`

            }

        }




    } else if (target === options[2].value) {
        //physics



    }


}

function createAndAppend(parent, tagName) {
    const elem = document.createElement(tagName);
    parent.appendChild(elem);
    return elem;
}