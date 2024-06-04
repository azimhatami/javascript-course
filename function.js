// Function

function myfunc() {
  console.log('Inside function!');
};

myfunc()


function another() {
  var stringVar = 'Inside function!';
  return stringVar;
};

var returned = another();
console.log(returned);


function calc(number1, number2) {
  return number1 + number2;
};

var calculator = calc;
console.log(calculator(10, 3));

// Arrow function
const say_hello = () => {
  console.log('Good Morning');
}

say_hello();


const add = (a, b) => a+b;

console.log(add(3, 2));

let numbers = [1, 2, 4, 7, 8, 5];

numbers.forEach(number => console.log(number));
