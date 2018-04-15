var course = new Object();


//object can be made in this way to
//course.title = "JavaScript Essential Training";
//course.instructor = "Morten Rand-Hendriksen";

var course = {
    title: "JavaScript Essential Training",
    instructor: "Morten Rand-Hendriksen",
    level: 1,
    published: true,
    views: 0,
    updateViews: function () {
        return ++course.views;
    }
}

console.log(course);
