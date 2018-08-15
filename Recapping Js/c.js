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
  for (let i in users) {
    console.log(i)

    if (i.online == true) {
      console.log('hopp')
      count++;
    }
    return count;
  }
  // change code above this line
}

console.log(countOnline(users));