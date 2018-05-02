const events = require('events');
const util = require('util');
const Person = function (name) {
    this.name = name;

};
util.inherits(Person, events.EventEmitter);
const james = new Person('james');
const hans = new Person('hans');
const george = new Person('george');

const people = [james, hans, george];

people.forEach(function (person) {
    person.on('speak', function (mssg) {
        console.log(person.name + ' said ' + mssg);

    });
});

james.emit('speak', ' hey dudes');
hans.emit('speak', 'I want a curry');
george.emit('speak', 'what I did?');


