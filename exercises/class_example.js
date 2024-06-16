class Father {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    fullName() {
        return `Hello ${this.firstName} ${this.lastName}`;
    }
}

class Boy extends Father {
    constructor(firstName, lastName, age) {
        super(firstName, lastName);
        this.age = age;
    }
}

let obj1 = new Father('Ali', 'Hatami');

console.log(obj1);
console.log(obj1.fullName());

let obj2 = new Boy('mmd', 'Hatami', 9);
console.log(obj2);
console.log(obj2.fullName());
