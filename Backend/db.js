// install mongoose
// import mongoose
var mongoose = require("mongoose");
 // mongoose.connect("").then(()=>{}).catch(()=>{ })
    mongoose
    .connect("mongodb+srv://HariKrishnan:user@cluster0.3jf3jno.mongodb.net/student_app?")
    .then(() => {
        console.log("db connect")
     })
    .catch((error) => { 
         console.log(error)
    }) 