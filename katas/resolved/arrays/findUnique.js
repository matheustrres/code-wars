const findUnique = (arr) => {
  const result = arr.find((elem) => {
    return arr.indexOf(elem) === arr.lastIndexOf(elem);
  });

  /**
   * Unary plus operator
   * 
   * - Precedes its operator
   * - Evaluates to its operand and tries to convert it to a number 
   * 
   * reference: https://stackoverflow.com/a/6683020
  */

  return +result;
}

console.log(findUnique([0, 0, 0.55, 0, 0])); /* 0.55 */