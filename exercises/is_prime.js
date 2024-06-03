
function is_prime(number) {
  let isPrime = true;
  let counter = 2;
  while (counter < parseInt(number ** 0.5) + 1) {
    if (number % counter == 0) {
      isPrime = false;
      break;
    };
    counter++
  };
  return isPrime
};

let number = 13

if (is_prime(number) == true) {
  console.log(`${number} is Prime.`);
} else {
  console.log(`${number} is not Prime.`);
};
