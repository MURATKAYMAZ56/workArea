{
    const fetchCats = new Promise((resolve, reject) => {
        get("http://thecatapi.com", (response) => {
            if (response.status < 400) {
                resolve(response.data);
            } else {
                reject(new Error(response.error));
            }
        })
    });

    const fetchDogs = new Promise((resolve, reject) => {
        get("dogs_url", (response) => {
            if (response.status < 400) {
                resolve(response.data);
            } else {
                reject(new Error(response.error));
            }
        })
    });

    // function dryFunc(url) {
    //     return new Promise((resolve, reject) => {
    //         get(url, (response) => {
    //             if (response.status < 400) {
    //                 resolve(response.data);
    //             } else {
    //                 reject(new Error(response.error));
    //             }
    //         })
    //     })
    // }

    // const fetchCats = dryFunc("http://thecatapi.com");
    // const fetchDogs = dryFunc("dogs_url");


    function fetchAllAnimals(fetchCats, fetchDogs) {
        return new Promise((resolve, reject) => {
            Promise.all([fetchCats], [fetchDogs])
                .then((response) => {
                    resolve(response.data);
                })
                .catch((error) => {
                    reject(new Error(error));
                })
        })
    }
}
