const generateCourseList = (instructors) => {
  const courses = [];

  instructors.forEach((instructor) => {
    if (courses.find((course) => course === instructor.course) === undefined) {
      courses.push(instructor.course);
    }
  });

  return courses;
};

const generateDataObject = (courses) => {
  const organizedData = {};

  courses.forEach((course) => {
    organizedData[course] = [];
  });

  return organizedData;
};

const organizeInstructors = function (instructors) {
  const courses = generateCourseList(instructors);
  const organizedData = generateDataObject(courses);

  instructors.forEach((instructor) => {
    organizedData[instructor.course].push(instructor.name);
  });

  return organizedData;
};

console.log(
  organizeInstructors([
    { name: "Samuel", course: "iOS" },
    { name: "Victoria", course: "Web" },
    { name: "Karim", course: "Web" },
    { name: "Donald", course: "Web" },
  ])
);
console.log(
  organizeInstructors([
    { name: "Brendan", course: "Blockchain" },
    { name: "David", course: "Web" },
    { name: "Martha", course: "iOS" },
    { name: "Carlos", course: "Web" },
  ])
);
