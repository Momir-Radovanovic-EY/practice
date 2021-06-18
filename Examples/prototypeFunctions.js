function Person() {
    this.name = '';
}

var person = new Person();
person.name = 'Momir'

console.log(person.__proto__ == Person.prototype);

Person.prototype.greet = function() {
    console.log("Hello")
}

console.log(person instanceof Person);

function Person2(name) {
    this.name = name;
}

var person2 = new Person2('Momir');
console.log(person2);