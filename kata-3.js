const numberOfVowels = function (data) {
  const letters = data.split("");
  let vowelCount = 0;

  letters.forEach((letter) => {
    if (
      (letter === "a") |
      (letter === "e") |
      (letter === "i") |
      (letter === "o") |
      (letter === "u")
    ) {
      vowelCount += 1;
    }
  });

  return vowelCount;
};

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));
