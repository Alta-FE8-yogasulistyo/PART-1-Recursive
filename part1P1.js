function checkPrime(num) {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

function primeX(num) {
  let counter = 0;
  let i = 2;

  while (true) {
    const isPrime = checkPrime(i);
    if (isPrime) {
      counter++;
    }
    if (counter === num) {
      return i;
    }
    i++;
  }
}

console.log(primeX(1));
console.log(primeX(5));
console.log(primeX(8));
console.log(primeX(9));
console.log(primeX(10));
