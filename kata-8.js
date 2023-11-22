const repeatNumbers = function (data) {
  const returnData = [];

  for (let dat of data) {
    let number = dat[0];
    let repetitions = dat[1];
    let repeatedNumberArray = [];

    for (let j = 0; j < repetitions; j++) {
      repeatedNumberArray.push(number);
    }

    returnData.push(repeatedNumberArray.join(""));
  }

  return returnData.join(" ");
};

console.log(repeatNumbers([[1, 10]]));
console.log(
  repeatNumbers([
    [1, 2],
    [2, 3],
  ])
);
console.log(
  repeatNumbers([
    [10, 4],
    [34, 6],
    [92, 2],
  ])
);
