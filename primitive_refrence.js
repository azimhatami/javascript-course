let a = 20;
let b = a;

console.log(a);
console.log(b);

let student1 = {
  name: 'Ali',
  age: 17,
};

let student2 = student1;
student2 = JSON.parse(JSON.stringify(student1));

student2.name = 'Azim';
student2.age = 20;

console.log(student1);
console.log(student2);
