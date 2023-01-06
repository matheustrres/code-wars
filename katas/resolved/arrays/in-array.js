/**
 * Given two arrays of strings a1 and a2 return a sorted array 'r' in lexicographical order 
 * of the strings of a1 which are substrings of strings of a2.
*/

const inArray = (strArr1, strArr2) => {
  return strArr1
    .filter((elem1) => strArr2.find((elem2) => elem2.match(elem1)))
    .sort();
}

const inArray2 = (strArr1, strArr2) => {
  return strArr1
    .filter((elem1) => strArr2.some((elem2) => elem2.includes(elem1)))
    .sort();
}

console.log(
  inArray(["arp", "live", "strong"], ["lively", "alive", "harp", "sharp", "armstrong"])
); /* [ 'arp', 'live', 'strong' ] */

console.log(
  inArray2(["arp", "live", "strong"], ["lively", "alive", "harp", "sharp", "armstrong"])
); /* [ 'arp', 'live', 'strong' ] */
