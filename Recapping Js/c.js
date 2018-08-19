function repeatStringNumTimes(str, num) {
  // repeat after me
  let rep = " ";
  for (i = 1; i <= num; i++) {
    rep = rep + str
  }
  return rep;
}

console.log(repeatStringNumTimes("abc", 3))
console.log(typeof (rep))