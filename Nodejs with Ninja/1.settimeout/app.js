// setTimeout(() => {
//     console.log('3 sec passed')
// }, 3000);




/*setting interval
let time = 0;
setInterval(() => {

    time += 2;

    console.log(time + 'seconds passed');


}, 2000);
*/




let time = 0;

let timer = setInterval(() => {
    time += 2;
    console.log(time + "seconds passed");
    if (time > 5) {
        clearInterval(timer);
    }

}, 2000);

//console.log(__dir);
