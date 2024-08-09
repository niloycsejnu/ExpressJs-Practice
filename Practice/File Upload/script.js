let express = require("express");
let multer = require("multer");

let app = express();
let storage = multer.diskStorage({
    destination:(req,file,callback)=>{
        callback(null,"./uploads");
    },
    filename:(req,file,callback)=>{
        callback(null,file.originalname);
    }
});

var upload = multer({storage}).single("myFile");

app.post("/",(req,res)=>{
    upload(req,res,(error)=>{
        if(error){
            res.send("Error");
        }
        else{
            res.send("No error");
        }
    });
});


app.listen(8000,()=>{
    console.log("Server Run Successful");
});