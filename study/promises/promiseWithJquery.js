const chemistryUrl = "http://api.nobelprize.org/v1/prize.json?year=2000&yearTo=2018&category=chemistry";
const medicineUrl = "	http://api.nobelprize.org/v1/laureate.json?bornCountryCode=nl";
const economicsUrl = "http://api.nobelprize.org/v1/prize.json?year=2000&yearTo=2018&category=economics";
window.onload = function () {
    $.get(chemistryUrl).then(function (chm) {
        console.log(chm);
        return $.get(medicineUrl);

    }).then(function (medicine) {
        console.log(medicine);
    });

};


