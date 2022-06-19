/**
 * This code snippet is based on one shared on LinkedIn and it helped 
 * me handling arrays of numbers
 * 
 * https://shorturl.at/chBQW
*/

const numbersSorter = (numbArr) => {
  for (let i = 0; i < numbArr.length; i++) {
    if (numbArr[i] > numbArr[i + 1]) {
      [numbArr[i], numbArr[i + 1]] = [numbArr[i + 1], numbArr[i]];

      let currentIndex = i;

      while (numbArr[currentIndex] < numbArr[currentIndex - 1] && currentIndex > 0) {
        [
          numbArr[currentIndex], /* 2 */
          numbArr[currentIndex - 1] /* 1 */
        ] = [
            numbArr[currentIndex - 1], /* 1 */
            numbArr[currentIndex] /* 2 */
          ];

        currentIndex--;
      }
    }
  }

  return numbArr;
}

console.log(
  numbersSorter([11, 3, 12, 13, 1, 15, 2, 4, 14, 6, 10, 9, 7, 5, 8])
); /*  [1,  2,  3,  4,  5,  6, 7,  8,  9, 10, 11, 12, 13, 14, 15] */
