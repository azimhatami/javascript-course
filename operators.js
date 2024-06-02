//////////////// Operators addition //////////////////

// var a = 5;
// var b = 10;

// console.log(a + b); // output -> 15

// a += b;
// console.log(a); // output -> 15

// a = a + b;
// console.log(a); // output -> 15

// var a = 5.2;
// var b = 4.5;

// console.log(a + b); // output -> 9.7

// var a = 'join ';
// var b = 'us';

// console.log(a + b); // output -> 'join us'

// var a = 'join ';
// var b = 3;

// console.log(a + b); // output -> 'join 3'

// var a = true;
// var b = ' join';

// console.log(a + b); // output -> 'true join'

// var a = [1, 2];
// var b = ' join';

// console.log(a + b); // output -> '1,2 join'

// var a = 12;
// var b = '1';

// console.log(a + b); // output -> '121'

// var a = 12;
// var b = true;

// console.log(a + b); // output -> 13

// var a = true;
// var b = true;

// console.log(a + b); // output -> 2

// var a = 12;
// var b = null;

// console.log(a + b); // output -> 12

// var a = 12;
// var b = undefined;

// console.log(a + b); // output -> NaN

// var a = 12;
// var b = NaN;

// console.log(a + b); // output -> NaN
// Operators subtraction

//////////////// Operator subtraction ///////////////////

// var a = 12;
// var b = 1;

// a -= b
// console.log(a); // output -> 11


// var a = 'Split us';
// var b = 'us';

// console.log(a - b); // output -> NaN

// var a = 12;
// var b = '1';

// console.log(a - b); // output -> 11

///////////////// Operator multiplication //////////////////

// var a = 12;
// var b = 2;

// a *= b
// console.log(a); // output -> 24

// var a = 1.3;
// var b = 2;

// console.log(a * b); // output -> 2.6

// var a = 1.3;
// var b = 2.2;

// console.log(a * b); // output -> 2.8600000000000003

// if ((a * b).toFixed() == 2.86) {
//   console.log('true');
// } else {
//   console.log('false');
// };

// var a = 2;
// var b = '2.2';

// console.log(a * b); // output -> 4.4


// var a = 2;
// var b = 'join';

// console.log(a * b); // output -> NaN


// var a = 'another';
// var b = 'join';

// console.log(a * b); // output -> NaN


// var a = 2;
// var b = null;

// console.log(a * b); // output -> 0

// var a = 2;
// var b = Infinity;

// console.log(a * b); // output -> Infinity


// var a = 5;
// var b = 5;

// if (a == b) {
//   console.log('Equal');
// } else {
//   console.log('Not equal');
// };

// console.log(a == b ? 'Equal' : 'Not equal');

/////////////// Operators precedence ///////////////

var a = 5;
var b = 6;

console.log(a + b * 2); // output -> 17

console.log((a + b) * 2); // output -> 22
