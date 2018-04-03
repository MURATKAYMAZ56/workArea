function giveEms(pixels) {

    let baseValue = 16;

    function doTheMath() {
        return pixels / baseValue;
    }
    return doTheMath;


}

let smalSize = giveEms(12);
let mediumSize = giveEms(18);
let largeSize = giveEms(24);
let xlarge = giveEms(32);

console.log("smalSize: " + smalSize());
console.log("mediumSize : " + mediumSize());
console.log("largeSize: " + largeSize());
console.log("Xlarge Size: " + xlarge());

/////the idea is normally the doTheMath functions does not work because we did not call it
//but it works already this is called closure.
