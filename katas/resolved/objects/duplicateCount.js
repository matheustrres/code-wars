const count = (str) => {
  let obj = {};

  for (let i = 0; i < str.length; i++) {
    let char = str.charAt(i);

    /* Using isNaN due to obj[char] returns NaN */
    obj[char] = isNaN(obj[char]) ? 1 : obj[char] + 1;
  }

  return obj;
}

console.log(count('aaabbccccd')); /* { a: 3, b: 2, c: 4, d: 1 } */