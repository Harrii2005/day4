var express = require("express");
var port = 3004
require("./db");
var student = require("./model")
var cors = require("cors")
var app = express();

//midleware
app.use(cors());
app.use(express.json())
//API
// app.get('/api', (req, res) => {
//    // res.send("New Api Created")
// })
app.post("/", (req, res) => {
    try {
        student(req.body).save();
        res.send("Student data added sucessfully")
    } catch (error) {
        res.send(error)
    }
})
//api to get data from db
app.get('/', async (req, res) => {
    try {
        var data = await student.find()
        res.send(data);
    } catch (error) {
        res.send(error);
    }
})
//Api to delete a particular document from collection
app.delete( "/:id", async (req, res) => {
        try {
            await student.findByIdAndDelete(req.params.id)
            res.send("Data deleted");
        } catch (error) {
            res.send(error);
        }
    }
);
//To update a particular document
app.put("/:id",async(req,res)=>{
    try {
        await student.findByIdAndUpdate(req.params.id,req.body)
        res.send("Data Updated");
    } catch (error) {
      res.send(error);  
    }
})

//Server in Listen mode
app.listen(port, () => {
    console.log(`Server is Running : ${port}`)
})

