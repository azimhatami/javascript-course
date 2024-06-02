// Array

var newArray = new Array('azim', 'ali', 'mmd');
// console.log(newArray.toString()); // output -> azim,ali,mmd

var array = ['old', 1, 2, 3, 4];
// console.log(array.length); // output -> 3
// console.log(array); // output -> 


// array[2] = 10;
// console.log(array); // -> [1, 2, 10]

// array[3] = 4;
// console.log(array); // -> [1, 2, 10, 4]

// array[5] = 5;
// console.log(array); // -> [1, 2, 10, 4, undefined, 5]


// array.forEach(function(element) {
//   console.log(element);
// });

// console.log(array.pop()); // output -> 3 \n [1, 2]

// console.log(array.shift()); // output -> 3 \n [1, 2]
// array.shift(); // output -> 1

// array.unshift('new');
// console.log(array);

// console.log(array.indexOf(3)); // output -> 2

// console.log(array.splice(1, 3)); // output -> [2, 3, 4]

// console.log(array);// output -> [1, 2, 3, 4, 'old']
// console.log(array.slice(1, 3)); // output -> [2, 3]
// console.log(array); // output -> [1, 2, 3, 4, 'old']

// console.log(array.filter(function (value) {
//   return value > 2;
// })); // output -> [3. 4]


// console.log(array.map(function (value) {
//   return value > 2;
// })); // output -> [false, false, true, true, false]


// console.log(array.map(function (element) {
//   return element * 2;
// })); // output -> [2, 4, 6, 8, NaN]


// console.log(array.reverse()); // output -> ['old', 4, 3, 2, 1]


// var anotherArray = ['join', 'me'];
// console.log(array.concat(anotherArray)); // -> ['old', 1, 2, 3, 4, 'join', 'me']
// console.log(array); // output -> ['old', 1, 2, 3, 4]

// var testArray = ['a', '1', 'b', '2']; 
// console.log(testArray.join(' -> ')); // -> 'old : 1 : 2 : 3 4'


// var varTest = [1, 2, 3, 4];
// console.log(varTest.reduce(function (total, value) {
//   return total + value;
// })); // output -> 10
