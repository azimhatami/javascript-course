// Class

class Person{
  constructor(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
  };

  greeting () {
    return`Hello ${this.firstname} ${this.lastname}, Welcome to JS !`;
  };
};

// Inheritance
class Student extends Person {
  constructor(firstname, lastname, age, score) {
    super(firstname, lastname);
    this.age = age;
    this.score = score;
  };
};

let person1 = new Person('Azim', 'Hatami');
console.log(person1);
console.log(person1.greeting());

let student1 = new Student('Ali', 'Hatami', 15, 18.5);
console.log(student1);
console.log(student1.firstname);
