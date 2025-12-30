const Student=require('../models/Student');

const insertStudents=async()=>{
  await Student.insertMany([
    { sid: 101, name: "Dolly", branch: "CSE", marks: 85 },
    { sid: 102, name: "Aman", branch: "CSE", marks: 72 },
    { sid: 103, name: "Riya", branch: "ECE", marks: 72 },
    {sid:104, name:"Khushi",branch:"CSE",marks:80}
  ]);
  console.log("Documents inserted!");
};

// Read

const getAllStudents=async()=>{
  const studentDetails=await Student.find();
  console.log("All students");
  console.log(studentDetails);
}

// update
const updatedStudent=async()=>{
  await Student.updateOne(
    {name:"Dolly"},
    {$set:{marks:81}}

  )
  console.log("Document updated!");
}

// delete
const deleteStudent=async()=>{
  await Student.deleteOne({name:"Aman"});
  console.log("Document Deleted!");
};

module.exports={insertStudents, getAllStudents , updatedStudent, deleteStudent};