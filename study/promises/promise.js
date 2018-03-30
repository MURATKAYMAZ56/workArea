const chemistryUrl = "http://api.nobelprize.org/v1/prize.json?year=2000&yearTo=2018&category=chemistry";
const medicineUrl = "	http://api.nobelprize.org/v1/laureate.json?bornCountryCode=nl";
const economicsUrl = "http://api.nobelprize.org/v1/prize.json?year=2000&yearTo=2018&category=economics";
window.onload = function () {
    function get(url) {
        return new Promise(function (resolve, reject) {
            const http = new XMLHttpRequest();
            http.open('GET', url, true);
            http.onload = function () {
                if (http.status === 200) {
                    resolve(JSON.parse(http.response));

                } else {
                    reject(http.statusText);

                }

            };
            http.send();

        });
    }
    const promise = get(chemistryUrl);
    promise.then(function (chemistry) {
        console.log(chemistry);
        return get(medicineUrl);
    }).then(function (medicines) {
        console.log(medicines);
        return get(economicsUrl);
    }).then(function (economics) {
        console.log(economics);
    }).catch(function (error) {
        console.log(error);

    });
};
