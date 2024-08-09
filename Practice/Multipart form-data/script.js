// npm install --save multer

let express = require("express");
let multer = require("multer");

let multerInstance = multer();
let app = express();

app.use(multerInstance.array());
app.use(express.static("public"));

app.post("/",(req,res)=>{
    let jsonData = req.body;
    res.send(JSON.stringify(jsonData));
});

app.listen(8000,()=>{
    console.log("Server run successful");
});