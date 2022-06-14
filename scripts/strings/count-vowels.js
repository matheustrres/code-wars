const countVowels = (string) => {
  let count = 0;

  const vowels = 'aeiou';

  for (const char of string.toLowerCase()) {
    if (vowels.includes(char)) count++;
  }

  return count;
}

console.log(countVowels('abracadabra')); /* 5 */