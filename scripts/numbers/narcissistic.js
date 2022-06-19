/**
 * A Narcissistic Number is a positive number which is the sum of its own digits, 
 * each raised to the power of the number of digits in a given base. 
 * In this Kata, we will restrict ourselves to decimal (base 10).
 * 
 * The code must return true or false (not 'true' and 'false') depending upon 
 * whether the given number is a Narcissistic number in base 10. 
 * This may be True and False.
*/

const narcissistic = (num) => {
  const numbArray = num.toString().split(''); /* [ '7' ] */
  const numbArrayLength = numbArray.length; /* 1 */

  const result = numbArray.reduce((prev, curr) /* 0, 7*/ => {
    return prev += curr ** numbArrayLength; /* 0 += 7 ** 1 = 7 */
  }, 0);

  return result === num;
}

console.log(narcissistic(7));
