// Object

// var name = 'Max';

// var person = {
//   fname: 'Azim',
//   'lname': 'Hatami',
//   age: 20,
//   details: {
//     hobbies: ['sports', 'cooking'],
//     loc: 'Ney',
//   },
//   greet: function(name) {
//     console.log(`Hello, I am ${name}.`);
//     console.log(`Hello, I am ${this.fname}.`);
//     console.log(`Hello, I am ${this.age} years old.`);
//   },
// };

// console.log(person); // -> { name: 'Azim', age: 20 }
// console.log(person.name); // -> 'Azim'
// console.log(person.details); // -> {hobbies: ['sports', 'cooking'], loc: 'Ney'}
// console.log(person.details.hobbies[1]); // -> cooking
// person.greet(); // -> 'Hello'
// console.log(typeof person); // -> 'object'
// console.log(typeof person.name); // -> 'string'
// console.log(person['lname']); // -> 'Hatami'
// person.fname = 'Ana';
// console.log(person.fname); // -> 'Ana'
// person.greet(name); // -> 'Hello, I am Max\n Hello, I am Azim\n Hello, I am 20 years old'

// var anotherPerson = new Object();
// anotherPerson.name = 'Anna';
// anotherPerson.age = 25;
// console.log(anotherPerson); // -> {name: 'Anna', age: 25}


let student = {
  firstname: 'Azim',
  lastname: 'Hatami',
  age: 20,
  fields: ['programming', 'nursing'],
  status: true,

  full_name() {
    return `${this.firstname} ${this.lastname}`;
  },

  say_hello() {
    return `Hello ${this.full_name()}!`
  },

  show_fields() {
    this.fields.forEach((field, index) => {
      console.log(`${index} - ${field}`);
    });
  }

}

// console.log(student);
// console.log(student.firstname);
// console.log(student.lastname);
// console.log(student.age);
// console.log(student.fields.length);
// console.log(student.status);

// let key = 'fields';
// console.log(student[key]);

// console.log(student.full_name()); // -> 'Azim Hatami'
// console.log(student.say_hello()); // -> 'Hello Azim Hatami!'

student.show_fields();
