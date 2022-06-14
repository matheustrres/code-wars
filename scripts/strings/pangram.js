/**
 * A pangram is a sentence that contains every single letter of 
 * the alphabet at least once 
*/

const isPangram = (sentence) => {
  sentence = sentence.toLowerCase();

  const alphabet = 'abcdefghijklmnopqrstuvwxyz';

  for (const char of alphabet) {
    if (!sentence.includes(char)) {
      return false
    }
  }

  return true;
}

console.log(isPangram('The quick brown fox jumps over the lazy dog.')); /* true */
console.log(isPangram('This is not a pangram.')); /* false */