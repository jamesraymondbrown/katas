const calculateChange = function (total, cash) {
  const difference = cash - total;

  const answerObject = {
    twenty: 0,
    tenner: 0,
    fiver: 0,
    toonie: 0,
    loonie: 0,
    quarter: 0,
    dime: 0,
    nickel: 0,
    penny: 0,
  };

  let parsedAnswerObject = {};

  const generateChangeRecursively = (value) => {
    if (value / 2000 > 1) {
      answerObject.twenty += 1;
      value -= 2000;
      return generateChangeRecursively(value);
    }
    if (value / 1000 > 1) {
      answerObject.tenner += 1;
      value -= 1000;
      return generateChangeRecursively(value);
    }
    if (value / 500 > 1) {
      answerObject.fiver += 1;
      value -= 500;
      return generateChangeRecursively(value);
    }
    if (value / 200 > 1) {
      answerObject.toonie += 1;
      value -= 200;
      return generateChangeRecursively(value);
    }
    if (value / 100 > 1) {
      answerObject.loonie += 1;
      value -= 100;
      return generateChangeRecursively(value);
    }
    if (value / 25 > 1) {
      answerObject.quarter += 1;
      value -= 25;
      return generateChangeRecursively(value);
    }
    if (value / 10 > 1) {
      answerObject.dime += 1;
      value -= 10;
      return generateChangeRecursively(value);
    }
    if (value / 5 > 1) {
      answerObject.nickel += 1;
      value -= 5;
      return generateChangeRecursively(value);
    }
    if (value > 0) {
      answerObject.penny += 1;
      value -= 1;
      return generateChangeRecursively(value);
    }
  };

  generateChangeRecursively(difference);

  if (answerObject.twenty !== 0) {
    parsedAnswerObject.twenty = answerObject.twenty;
  }
  if (answerObject.tenner !== 0) {
    parsedAnswerObject.tenner = answerObject.tenner;
  }
  if (answerObject.fiver !== 0) {
    parsedAnswerObject.fiver = answerObject.fiver;
  }
  if (answerObject.toonie !== 0) {
    parsedAnswerObject.toonie = answerObject.toonie;
  }
  if (answerObject.loonie !== 0) {
    parsedAnswerObject.loonie = answerObject.loonie;
  }
  if (answerObject.quarter !== 0) {
    parsedAnswerObject.quarter = answerObject.quarter;
  }
  if (answerObject.dime !== 0) {
    parsedAnswerObject.dime = answerObject.dime;
  }
  if (answerObject.nickel !== 0) {
    parsedAnswerObject.nickel = answerObject.nickel;
  }
  if (answerObject.penny !== 0) {
    parsedAnswerObject.penny = answerObject.penny;
  }

  return parsedAnswerObject;
};

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));

// Expected outputs:
// { twoDollar: 1, dime: 1, penny: 3 }
// { tenDollar: 1, twoDollar: 1, oneDollar: 1, quarter: 3, penny: 2 }
// { twoDollar: 2, quarter: 3, dime: 2, penny: 4 }
