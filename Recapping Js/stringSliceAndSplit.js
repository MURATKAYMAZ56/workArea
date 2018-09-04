let str = 'This is a string to be applied slice method ';
let slicedStr = str.slice(23, 36); ///slice(where,to where)
let slicedAll = str.slice(23); // to end
console.log(slicedStr);
console.log(slicedAll);


let tags = 'meat, carrot, cola, kek, vegetarian';
let tagsArray = tags.split(',');
console.log(tags)
console.log(tagsArray)
console.log('splited string= ' + tagsArray);
console.log('jdhdh= ' + tags)

const sentence = "I am going to get shower";
const splitedSentence = sentence.split("");
console.log(splitedSentence);