/**
 * The Longest Increasing Subsequence (LIS) problem is to find the length of the longest subsequence of 
 * a given sequence such that all elements of the subsequence are sorted in increasing order. 
 */

const longestIncreasingSubsequence = (numArr) => {
  let MAX_SUBSEQUENCE_LENGTH = 1;
  const LIS_ARRAY = Array.from(numArr, () => MAX_SUBSEQUENCE_LENGTH);

  for (let i = 1; i < numArr.length; i++) {
    for (let j = 0; j < i; j++) {
      if (numArr[i] > numArr[j]) {
        LIS_ARRAY[i] = Math.max(LIS_ARRAY[i], LIS_ARRAY[j] + 1);
        MAX_SUBSEQUENCE_LENGTH = Math.max(LIS_ARRAY[i], MAX_SUBSEQUENCE_LENGTH);
      }
    }
  }

  return MAX_SUBSEQUENCE_LENGTH;
}

console.log(longestIncreasingSubsequence([10, 22, 9, 33, 21, 50])); // 4
console.log(longestIncreasingSubsequence([50, 41, 60, 22])); // 2
console.log(longestIncreasingSubsequence([10, 22, 9, 33, 21, 50, 41, 60, 22, 68, 90])); // 7