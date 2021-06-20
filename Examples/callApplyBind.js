///////////////////////////
/** Call usage example */

const name1 = {
    firstName: 'Developer1',
    lastName: 'React'
}
const name2 = {
    firstName: 'Developer2',
    lastName: 'Angular'
}
const printFullName = function (hometown, state) {
    console.log(`${this.firstName} ${this.lastName} from ${hometown}, ${state}`);
}

printFullName.call(name1, "Town1", "State1");

printFullName.call(name2, "Town2", "State2");


///////////////////////////
/** Call usage example */

function Person(name, age) {
    this.name = name;
    this.age = age;
}
function Engineer(name, age) {
    Person.call(this, name, age);
    this.category = 'Engineer';
}
function Doctor(name, age) {
    Person.call(this, name, age);
    this.category = 'Doctor';
}
const engineer = new Engineer('Dev1', 28);
console.log(engineer);

const doctor = new Doctor('Dev2', 30);
console.log(doctor);


///////////////////////////
/** Apply usage example */


const arr = [1, 2, 3];
const numbers = [4, 5, 6];
arr.push.apply(arr, numbers);
console.log(arr);
//[1, 2, 3, 4, 5, 6]


///////////////////////////
/** Apply usage example */

// Min/Max number in an array
const numbers2 = [9, 8, 1, 2, 3, 5, 6, 7];
// Using Math.min/Math.max apply
let max = Math.max.apply(null, numbers);
console.log(max); //9
// This about equal to Math.max(numbers[0], ...)
// or Math.max(5, 6, ...)
let min = Math.min.apply(null, numbers);
console.log(min); //1

///////////////////////////
/** Bind usage example */

const person = {
    firstName: 'John Doe',
    getName: function () {
        console.log(this.firstName);
    }
};

const printName = person.getName;
setTimeout(printName, 1000); //prints undefined

const withThis = person.getName.bind(person);
setTimeout(withThis, 1000);
// prints "John Doe"
