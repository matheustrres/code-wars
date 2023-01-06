const accumulate = (string) => {
  const strChars = string.split('');
  const result = [];

  strChars.forEach((_, index) => {
    const uppedChars = strChars[index].toUpperCase();
    const charsArr = Array(index + 1).join(strChars[index].toLowerCase());

    result.push(uppedChars + charsArr);
  });

  return result.join('-');
}

console.log(accumulate('abcdefgh')); /* A-Bb-Ccc-Dddd-Eeeee-Ffffff-Ggggggg-Hhhhhhhh */
