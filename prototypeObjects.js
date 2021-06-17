var person = {
    name: 'Momir',
    surname: 'Radovanovic'
}

// THIS referira na objekat koji ga je pozvao
Object.prototype.fullname = function(){
    console.log("Hello there, my fullname is " + this.name + " " + this.surname + "!")
}

var momir = Object.create(person);
// U ovom slucaju objekat momir koji ga poziva
console.log(momir.fullname());

var pera = Object.create(person);
pera.name = "Pera"; 
// pera.surname = 'Peric';

// surname nalazi u person objektu pomocu prototype chain (inheritance)
console.log(pera.fullname());