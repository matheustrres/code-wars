const removeDuplicates = (arr) => [...new Set(arr)];

console.log(removeDuplicates([0, 0, 0.55, 0,  1, 1, 2, 1, 3, 2])); /* [ 0, 0.55, 1, 2, 3 ] */