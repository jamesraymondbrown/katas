const toPigLatin = (input) => {
  const pigLatin = [];
  let words = input.slice(2);

  for (const word of words) {
    pigLatin.push(word.slice(1) + word[0] + "ay");
    // console.log("log", word.slice(1) + word[0] + "ay");
  }

  return pigLatin.join(" ");
};

console.log(toPigLatin(process.argv));
