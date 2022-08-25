function fibonanci(num) {
  if (num < 2) {
    return num;
  } else {
    return fibonanci(num - 1) + fibonanci(num - 2);
  }
}

console.log(fibonanci(0));
console.log(fibonanci(2));
console.log(fibonanci(9));
console.log(fibonanci(10));
console.log(fibonanci(12));
