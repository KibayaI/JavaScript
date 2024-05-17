var student = {
  name: "David Rayy",
  sclass: "VI",
  rollno: 12,
};

console.log("----------before removing-----------------")
console.log(student);

delete student.rollno;

console.log("\n----------after removing-----------------");
console.log(student);
