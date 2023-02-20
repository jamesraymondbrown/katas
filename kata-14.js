const calculateChange = function (total, cash) {
  const difference = cash - total;

  console.log("difference", difference);

  // Valid denominations:
  // Twenty dollars
  // Ten dollars
  // Five dollars
  // Two dollars
  // One dollar
  // Quarter (25¢)
  // Dime (10¢)
  // Nickel (5¢)
  // Penny (1¢)
};

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));

// Expected outputs:
// { twoDollar: 1, dime: 1, penny: 3 }
// { tenDollar: 1, twoDollar: 1, oneDollar: 1, quarter: 3, penny: 2 }
// { twoDollar: 2, quarter: 3, dime: 2, penny: 4 }
