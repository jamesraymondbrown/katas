const checkAir = function (samples, threshold) {
  let sampleScore = 0;

  samples.forEach((sample) => {
    if (sample === "dirty") {
      sampleScore += 1;
    }
  });

  if (sampleScore / samples.length < threshold) {
    return "clean";
  }
  return "polluted";
};

console.log(
  checkAir(
    [
      "clean",
      "clean",
      "dirty",
      "clean",
      "dirty",
      "clean",
      "clean",
      "dirty",
      "clean",
      "dirty",
    ],
    0.3
  )
);

console.log(checkAir(["dirty", "dirty", "dirty", "dirty", "clean"], 0.25));

console.log(
  checkAir(["clean", "dirty", "clean", "dirty", "clean", "dirty", "clean"], 0.9)
);
