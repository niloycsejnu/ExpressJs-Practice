let express = require('express');

let app = express();

//get request url query parameter
app.get("/get_query",(req,res)=>{
    let firstName = req.query.firstName;
    let lastName = req.query.lastName;
    res.end(firstName + " " + lastName);
});

//get request header
app.get("/get_header",(req,res)=>{
    let firstName = req.header("firstName");
    let lastName = req.header("lastName");
    res.end(firstName +" "+ lastName);
});

// simple post req
app.post("/post",(req,res)=>{
    res.send("This is simple post req");
});

//post request url query parameter
app.get("/post_query",(req,res)=>{
    let firstName = req.query.firstName;
    let lastName = req.query.lastName;
    res.end(firstName + " " + lastName);
});

//post request header
app.post("/header",(req,res)=>{
    let userName = req.header("userName");
    let password = req.header("password");
    res.end("UserName:" +userName + "Password:" + password);
});
app.listen(8000,()=>{
    console.log("Server Run Successful");
});