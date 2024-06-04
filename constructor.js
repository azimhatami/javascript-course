// Constructor

function Person(firstname, lastname, age) {
  this.firstname = firstname;
  this.lastname = lastname;
  this.age = age;

  this.full_name = function() {
    return `${this.firstname} ${this.lastname}`
  };
};


const ali = new Person('Ali', 'Hatami', 15);
console.log(ali);
console.log(ali.firstname);
console.log(ali.lastname);
console.log(ali.full_name());
console.log(ali.age);
console.log('-----------------');

const mmd = new Person('Mmd', 'Hatami', 10);
console.log(mmd);
console.log(mmd.firstname);
console.log(mmd.lastname);
console.log(mmd.full_name());
console.log(mmd.age);

