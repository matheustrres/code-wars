/**
 * Write a simple parser that will parse and run Deadfish.
 * 
 * Deadfish has 4 commands, each 1 character long:
 * 
 * i increments the value (initially 0)
 * d decrements the value
 * s squares the value
 * o outputs the value into the return array
 * 
 * Invalid characters should be ignored.
 */
const parse = (string) => {
  const result = [];
  const splitedString = string.split('');

  splitedString.reduce((cur, v) => {
    if (v == 'i') cur++;
    if (v == 'd') cur--;
    if (v == 's') cur = Math.pow(cur, 2);
    if (v == 'o') result.push(cur);

    return cur;
  }, 0);

  return result;
}

console.log(parse('iiisdoso')); // [8, 64];