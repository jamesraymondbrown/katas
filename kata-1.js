const sumLargestNumbers = function (data) {
  let largestNum = 0;
  let secondLargestNum = 0;

  data.forEach((num) => {
    if (num > largestNum && largestNum === 0) {
      largestNum = num;
      return;
    }
    if (num > largestNum && largestNum !== 0) {
      secondLargestNum = largestNum;
      largestNum = num;
      return;
    }
    if (num > secondLargestNum) {
      secondLargestNum = num;
    }
  });

  return largestNum + secondLargestNum;
};

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));
