// const args = process.argv;

const toPigLatin = (input) => {
  const pigLatin = [];
  let words = input.slice(2);

  for (const word of words) {
    console.log("log", word.slice(1) + word[0] + "ay");
  }

  return pigLatin;
};

// console.log(toPigLatin(process.argv));

console.log(toPigLatin([0, 0, "snail", "hole"]));
