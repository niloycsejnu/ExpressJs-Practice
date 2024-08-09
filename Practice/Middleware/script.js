//Application Level Middleware

/*
let express = require("express");

let app = express();


app.use((req,res,middle)=>{
    console.log("This is application level middleware");
    middle();
});

app.get("/",(req,res)=>{
    res.send("This is home page");
});
app.get("/about",(req,res)=>{
    res.send("This is about page");
});
app.get("/contact",(req,res)=>{
    res.send("This is contact page");
});

app.listen(8000,()=>{
    console.log("Server Run Successful");
});
*/


//Route Level Middleware

/*
let express = require("express");

let app = express();

app.get("/",(req,res)=>{
    res.send("This is home page");
});

app.use("/about",(req,res,middle)=>{
    console.log("This is route level middleware");
    middle();
});
app.get("/about",(req,res)=>{
    res.send("This is about page");
});
app.get("/contact",(req,res)=>{
    res.send("This is contact page");
});

app.listen(8000,()=>{
    console.log("Server Run Successful");
});
*/