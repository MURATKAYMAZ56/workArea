let users = {
  Alan: {
    age: 27,
    online: false
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: false
  },
  Ryan: {
    age: 19,
    online: true
  }
};

function countOnline(obj) {
  // change code below this line
  let count = 0;
  for (let key in obj) {
    console.log(typeof (key));
    if (obj[key].online) {
      count++;
    }

  }
  return count;
  // change code above this line
}

console.log(countOnline(users));

function copyMachine(arr, num) {
  let newArr = [];
  while (num >= 1) {
    // change code below this line
    console.log(newArr.push([...arr]))
    // change code above this line
    num--;
  }
  return newArr;
}

// change code here to test different cases:
console.log(copyMachine([true, false, true], 2));