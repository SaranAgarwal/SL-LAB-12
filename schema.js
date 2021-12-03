const mongoose = require("mongoose")
const { Schema } = mongoose;

const studentSchema = new Schema({
    bookName: String,
    studentName: String,
    dueDate: String
});

module.exports = mongoose.model("student", studentSchema, "SL-LAB-Backend");