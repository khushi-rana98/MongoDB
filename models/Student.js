const mongoose=require('mongoose');
const studentSchema=new mongoose.Schema({
  sid:Number,
  name:String,
  branch:String,
  marks:Number,
  status:String
});
module.exports=mongoose.model("Student",studentSchema);