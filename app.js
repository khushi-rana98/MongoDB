const {insertStudents, getAllStudents , updatedStudent, deleteStudent} =require('./Controller/studentController');
const connectDB=require('./config/db');

const runApp=async()=>{
  await connectDB();
  await insertStudents();
  await getAllStudents();
  await updatedStudent();
  await deleteStudent();
  await getAllStudents();
  process.exit(); 
};

runApp();