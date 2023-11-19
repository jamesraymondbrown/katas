const urlEncode = function (text) {
  const originalTextArray = text.trim().split("");
  const formattedTextArray = [];

  for (letter of originalTextArray) {
    if (letter === " ") {
      formattedTextArray.push("%20");
    } else {
      formattedTextArray.push(letter);
    }
  }

  return formattedTextArray.join("");
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));
