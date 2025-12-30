const mongoose=require('mongoose');
const studentSchema=new mongoose.Schema({
  sid:Number,
  name:String,
  subject:String,
  branch:String,
  marks:Number
});
module.exports=mongoose.model("Student",studentSchema);
