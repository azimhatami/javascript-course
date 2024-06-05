// Constructor

function Person(firstname, lastname, age) {
  this.firstname = firstname;
  this.lastname = lastname;
  this.age = age;

  this.full_name = function() {
    return `${this.firstname} ${this.lastname}`
  };
};

Person.prototype.eye_color = 'black'

console.log(Person());

const ali = new Person('Ali', 'Hatami', 15);
ali.city = 'Tehran';
console.log(ali);
console.log(ali.firstname);
console.log(ali.lastname);
console.log(ali.full_name());
console.log(ali.age);
console.log(ali.city);
console.log(ali.eye_color);

console.log('-----------------');

const mmd = new Person('Mmd', 'Hatami', 10);
mmd.city = 'Ney'
console.log(mmd);
console.log(mmd.firstname);
console.log(mmd.lastname);
console.log(mmd.full_name());
console.log(mmd.age);
console.log(mmd.city);
console.log(ali.eye_color);
