const divisors = (numb) => {
  const result = [];

  for (let i = 2; i <= ~~(numb / 2); i++) {
    if ((numb % i) == 0) {
      result.push(i);
    }
  }

  return result.length ? result : numb + ' is prime';
}

console.log(divisors(24));