const Bird = function (age, birth) {
  this.age = age;
  this.birth = birth;
}



Bird.prototype.numLegs = 2;
Bird.prototype.eat = function () {
  console.log("nom nom nom");
}

Bird.prototype.describe = function () {
  console.log("My name is " + this.name);
}

console.log(Bird.prototype);