const arrayDiff = (firstArr, secondArr) => {
  const diff = firstArr.filter((element) => {
    return !secondArr.includes(element);
  });

  return diff;
}

const arrayDiff2 = (firstArr, secondArr) => {
  const diff = firstArr.filter((element) => {
    return secondArr.indexOf(element) == -1;
  });

  return diff;
}

const arrayDiff3 = (firstArr, secondArr) => {
  secondArr = new Set(secondArr);

  const diff = firstArr.filter((element) => !secondArr.has(element));

  return diff;
}

console.log(arrayDiff([1, 2, 3], [2, 5]));
console.log(arrayDiff2([1, 2, 3], [2, 5]));
console.log(arrayDiff3([1, 2, 3], [2, 5]));