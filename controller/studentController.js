const Student=require('../models/student');
const insertStudents=async()=>{
  await Student.insertMany([
    {sid:101,name:"Khushi",subject:"DBMS",branch:"CSE",marks:85},
     { sid: 102, name: "Aman", subject: "OS", branch: "CSE", marks: 72 },
    { sid: 103, name: "Riya", subject: "CN", branch: "IT", marks: 90 }
]);
console.log("Student data inserted!");
};


// Display students sorted by marks:
const getSortedStudents=async()=>{
  const students=await Student.find().sort({marks:1});
  console.log("Students sorted by marks in ascending order");
  console.log(students);
};
module.exports={insertStudents,getSortedStudents};