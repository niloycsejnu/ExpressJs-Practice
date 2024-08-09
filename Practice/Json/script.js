//npm install body-parser

let express = require("express");
let bodyParser = require("body-parser");

let app = express();

app.use(bodyParser.json());

/*
app.post("/",(req,res)=>{
    let jsonData = req.body;
    let jsonString = JSON.stringify(jsonData);
    res.send(jsonString);
});
*/

/*
app.post("/",(req,res)=>{
    let jsonData = req.body;
    let name = jsonData["name"];
    let age = jsonData["age"];
    res.send("Name:"+name +" "+"Age:"+ age);
});
*/

app.listen(8000,()=>{
    console.log("Server Run successful");
});