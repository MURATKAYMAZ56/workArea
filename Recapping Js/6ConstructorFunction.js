let Car1 = {
    maxSpeed: "50",
    driver: "james",
    drive: function (speed, time) {
        console.log(speed * time);
    },
    logDrive: function () {
        console.log("the driver is" + this.driver)
    }
}

let Car2 = {
    maxSpeed: "50",
    driver: "james",
    drive: function (speed, time) {
        console.log(speed * time);
    },
    logDrive: function () {
        console.log("the driver is" + this.driver)
    }
}
let Car3 = {
    maxSpeed: "50",
    driver: "james",
    drive: function (speed, time) {
        console.log(speed * time);
    },
    logDrive: function () {
        console.log("the driver is" + this.driver)
    }
}

/// think that you have 30 cars so it wont be wise to write them all one by by
/// here the constructor function comes

// Car is my constructor object 
let Car = function (maxSpeed, driver) {
    this.maxSpeed = maxSpeed;
    this.driver = driver;
    this.drive = function (speed, time) {
        console.log(speed * time);
    };
    this.logDrive = function () {
        console.log("The driver is " + this.driver)
    }
};

//assigned myCar with Car object class
let myCar1 = new Car(70, "Murat");
let myCar2 = new Car(60, "Ahmo");
let myCar3 = new Car(70, "James Bond");

myCar1.drive(30, 5);
myCar2.logDrive();
myCar3.logDrive();

//////////////////////////////////////////////////////////////////////////////////////////////////////
class User {
    constructor(userName, email, password) {
        this.userName = userName;
        this.email = email;
        this.password = password;

    }
    register() {
        console.log(this.userName + " is registered");
    }

}

let user1 = new User('murat', 'm@gmail.com', '12345');
console.log(user1);
user1.register();