exam_type = prompt("Enter the type of exam");
marks = prompt("Enter your marks");
exam_type = exam_type.toLowerCase();
checkGrade(exam_type, marks);

function checkGrade(exam_type, marks) {
  if (exam_type == "final") {
    if (marks > 89) {
      alert("Excellent job, you got an A+");
    } else if (marks > 79) {
      alert("Good job, you got an A");
    } else if (marks > 69) {
      alert("Well done, you got a B+");
    } else if (marks > 59) {
      alert("Nice work, you got a B");
    } else if (marks < 60) {
      alert("You need to improve");
    }
  } else {
    if (marks > 88) {
      alert("Excellent job, you got an A+");
    } else if (marks > 79) {
      alert("Good job, you got an A");
    } else if (marks > 69) {
      alert("Well done, you got a B+");
    } else if (marks > 59) {
      alert("Nice work, you got a B");
    } else if (marks < 60) {
      alert("You need to improve");
    }
  }
}
