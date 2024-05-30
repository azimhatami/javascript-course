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
