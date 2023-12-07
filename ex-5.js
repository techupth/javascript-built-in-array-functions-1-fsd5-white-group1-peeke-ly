const students = [
  { name: "John", score: 80 },
  { name: "Jane", score: 90 },
  { name: "Jim", score: 85 },
  { name: "Joan", score: 95 },
];

function getAverageStudentScore(students) {
  // Start coding here
  let totalScore = students.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue.score;
  }, 0);
  return totalScore / students.length;
}

let averageStudentScore = getAverageStudentScore(students);
console.log(averageStudentScore); // Output: 87.5
