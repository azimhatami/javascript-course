let ul = document.querySelector('ul');

// console.log(ul.children);

// Array.from(ul.children).forEach((li, index) => {
//   if (index % 2 == 0) {
//     li.style.color = 'red';
//   } else {
//     li.style.color = 'blue';
//   };
// });


// ul.parentElement.style.fontSize = '25px'
ul.previousElementSibling.style.color = 'red';
ul.nextElementSibling.style.color = 'blue';
