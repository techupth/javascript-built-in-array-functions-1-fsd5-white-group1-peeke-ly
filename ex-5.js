const students = [
  { name: "John", score: 80 },
  { name: "Jane", score: 90 },
  { name: "Jim", score: 85 },
  { name: "Joan", score: 95 },
];

function getAverageStudentScore(students) {
  // Start coding here
  let totalScore = students.reduce((accumulator, student) => {
    return accumulator + student.score;
  }, 0);

  let averageScore = totalScore / students.length;
  return averageScore;
}

let averageStudentScore = getAverageStudentScore(students); // Output: 87.5

console.log(averageStudentScore);
