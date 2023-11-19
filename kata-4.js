const instructorWithLongestName = function (instructors) {
  let longestNameInstructor = { name: "", course: "" };

  instructors.forEach((instructor) => {
    if (instructor.name.length > longestNameInstructor.name.length) {
      longestNameInstructor = instructor;
    }
  });

  return longestNameInstructor;
};

console.log(
  instructorWithLongestName([
    { name: "Samuel", course: "iOS" },
    { name: "Jeremiah", course: "Web" },
    { name: "Ophilia", course: "Web" },
    { name: "Donald", course: "Web" },
  ])
);
console.log(
  instructorWithLongestName([
    { name: "Matthew", course: "Web" },
    { name: "David", course: "iOS" },
    { name: "Domascus", course: "Web" },
  ])
);
