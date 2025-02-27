let username = prompt("Enter your username:");
let numSubjects = parseInt(prompt("Enter number of subjects:"));

let subjects = [];
let totalMarks = 0;
let highestMark = 0;
let highestSubject = "";

for (let i = 0; i < numSubjects; i++) {
  let subjectName = prompt(`Enter the name of subject ${i + 1}:`);
  let mark = parseInt(prompt(`Enter marks for ${subjectName}:`));

  subjects.push({ name: subjectName, marks: mark });
  totalMarks += mark;

  if (mark > highestMark) {
    highestMark = mark;
    highestSubject = subjectName;
  }
}

function getGrade(marks) {
  if (marks >= 90) return "A+";
  else if (marks >= 80) return "A";
  else if (marks >= 70) return "B+";
  else if (marks >= 60) return "B";
  else if (marks >= 50) return "C";
  else if (marks >= 40) return "D";
  else return "F";
}

let percentage = (totalMarks / (numSubjects * 100)) * 100; // Assuming each subject is out of 100

console.log(`\nUsername: ${username}`);
console.log(`Highest Scoring Subject: ${highestSubject} (${highestMark} marks)`);
console.log("Subjects and Grades:");
subjects.forEach((subject) => {
  console.log(
    `${subject.name}: ${subject.marks} marks - Grade: ${getGrade(subject.marks)}`
  );
});
console.log(`Total Marks: ${totalMarks}`);
console.log(`Percentage: ${percentage.toFixed(2)}%`);
