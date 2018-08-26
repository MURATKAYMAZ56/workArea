const numberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34]

//doudle positive numbers
const myArr = numberArray.map((value, index, array) => {
    console.log("index is " + index + " value is " + value);
    // console.log(index);
})
////doudle positive numbers
const positiveNumberDoubled = numberArray.filter(num => num > 0).map(num => num * 2);
console.log(positiveNumberDoubled)

const sumOfNum = numberArray.reduce((a, b) => a + b);
console.log(sumOfNum)


///rest operator
const maxN = Math.max(...numberArray);
console.log(maxN);
///onject literal declaration
const createPerson = (name, age, gender) => {
    return ({
        name,
        age,
        gender
    })

}
console.log(createPerson("ahmo", 44, "male"));

/////////prototype
function Person(name, age, gender) {
    this.name = name,
        this.age = age,
        this.gender = gender

};
const myFriend = new Person("ali", 27, "male");
console.log(myFriend)
console.log(myFriend.gender);