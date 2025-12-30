const connectDB=require('./config/db.js');
const {insertStudents,getSortedStudents}=require('./controller/studentController');

const runApp=async ()=>{
  await connectDB();
  await insertStudents();
  await getSortedStudents();
  process.exit();
};
runApp();