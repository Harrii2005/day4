var mongoose = require("mongoose");
var studentSchema = mongoose.Schema({
    name:String,
    age: Number,
    course:String,
    place: String,
    address:String,
    email:String
})
var studentModel = mongoose.model("Student",studentSchema);
module.exports = studentModel