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

const pascalCase = function (input) {
  const charArray = input.split("");
  const camelCaseArray = [];

  for (let i = 0; i < charArray.length; i++) {
    if (i === 0) {
      camelCaseArray.push(charArray[i].toUpperCase());
      continue;
    }
    if (charArray[i - 1] === " ") {
      camelCaseArray.push(charArray[i].toUpperCase());
    } else if (charArray[i] !== " ") {
      camelCaseArray.push(charArray[i]);
    }
  }

  return camelCaseArray.join("");
};

const makeCase = function (input, outputCase) {
  let output = "";

  if (outputCase === "camel") {
    output = camelCase(input);
    return output;
  }
  if (outputCase === "pascal") {
    output = pascalCase(input);
    return output;
  }

  return output;
};

console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "snake"));
console.log(makeCase("this is a string", "kebab"));
console.log(makeCase("this is a string", "title"));
console.log(makeCase("this is a string", "vowel"));
console.log(makeCase("this is a string", "consonant"));
console.log(makeCase("this is a string", ["upper", "snake"]));