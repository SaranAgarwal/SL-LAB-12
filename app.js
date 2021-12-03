const express = require("express")
const mongoose = require("mongoose")
const app = express()
const url = "mongodb+srv://sllab:sllab1234@cluster0.szifv.mongodb.net/SL-LAB-BACKEND2?retryWrites=true&w=majority"
const mySchema = require('./schema.js');

mongoose.connect(url).then(()=>{
    console.log("Connected to DB");
})

app.use(express.json())
app.post("/", async(req,res)=>{
    const bookname = req.body.bookName;
    const name = req.body.studentName;
    const date = req.body.dueDate;

    try {
        const newObj = new mySchema({
            bookName: bookname,
            studentName: name,
            dueDate: date
        })
        const savedData = await newObj.save();
        res.json({
            "message": "Data is stored",
            "data": savedData
        })
    } catch (err) {
        res.json(err);
    }
})

app.listen(3000, ()=>{
    console.log("Express server started");
})