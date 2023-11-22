const camelCase = function (input) {
  const charArray = input.split("");
  const camelCaseArray = [];

  for (let i = 0; i < charArray.length; i++) {
    if (charArray[i - 1] === " ") {
      camelCaseArray.push(charArray[i].toUpperCase());
    } else if (charArray[i] !== " ") {
      camelCaseArray.push(charArray[i]);
    }
  }

  return camelCaseArray.join("");
};

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));
