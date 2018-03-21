'use strict';
{
    const API = {
        endpoints: {
            laureate: 'http://api.nobelprize.org/v1/laureate.json?',
            prize: 'http://api.nobelprize.org/v1/prize.json?'
        },
        queries: [
            {
                description: 'All female laureates',
                endpoint: 'laureate',
                queryString: 'gender=female'
            }
        ]
    };


    function fetcJSON(url, cb) {
        const mrt = new XMLHttpRequest();
        mrt.open('GET', url);
        mrt.responseType = 'json';
        mrt.onreadystatechange = () => {
            //console.log(mrt.readyState)
            if (mrt.readyState === 4) {
                if (mrt.status < 400) {
                    cb(null, mrt.response)

                    //console.log(mrt.response);
                } else {
                    cb(new Error(mrt.statusText));


                }
            }

        };
        mrt.send();

    }
    const url = API.endpoints.laureate + API.queries[0].queryString;
    fetcJSON(url, (error, data) => {
        if (error !== null) {
            console.error(error);
        } else {
            console.log(data)
        }
    })







}