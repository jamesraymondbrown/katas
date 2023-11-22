const multiplicationTable = function (maxValue) {
  const fullTableArray = [];

  for (let i = 1; i <= maxValue; i++) {
    const tableRowArray = [];
    for (let j = 1; j <= maxValue; j++) {
      tableRowArray.push(i * j);
    }
    fullTableArray.push(tableRowArray.join(" "));
  }

  return fullTableArray.join("\n");
};

console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));
