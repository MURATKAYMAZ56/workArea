
function Course(title, instructor, level, published, views) {


    this.title = title;
    this.instructor = instructor;
    this.level = level;
    this.published = published;
    this.views = views;
}
var course01 = new Course("JAVA-SCRIPT", "Murat K", "2", "true", "0");
var course02 = new Course("Css", "Murat K2", "advenced", "false", "3");

console.log(course01);
console.log(course02);

// ///also can be 
// var courses = [
//     new Course("JAVA-SCRIPT", "Murat K", "2", "true", "0"),
//     new Course("Css", "Murat K2", "advenced", "false", "3")
// ];
// console.log(courses);
