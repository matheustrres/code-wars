/**
 * Write a function that accepts an array of 10 integers (between 0 and 9), 
 * that returns a string of those numbers in the form of a phone number.
 */
const createPhoneNumber = (numbersArr) => {
  let format = '(xxx) xxx-xxxx';
  
  for (let i = 0; i < numbersArr.length; i++) {
    format = format.replace('x', numbersArr[i]);
  }
  
  return format;
}