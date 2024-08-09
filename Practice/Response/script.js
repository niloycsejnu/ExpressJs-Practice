let express = require('express');
app = express();

//Simple String Response
// res.send()-->response body
// res.end()-->response ending point
app.get("/one",(req,res)=>{
    res.send("This is Simple String Response 1");
});
app.post("/two",(req,res)=>{
    res.send("This is Simple String Response 2");
});

//response status code
app.get("/three",(req,res)=>{
    res.status(401).end("Unauthorised");
});

//response json
let jsonArray = [
    {
        name:"Niloy",
        age:"23",
        city:"Dhaka"
    },
    {
        name:"Niloy",
        age:"23",
        city:"Dhaka"
    },
    {
        name:"Niloy",
        age:"23",
        city:"Dhaka"
    }
]
app.get("/four",(req,res)=>{
    res.json(jsonArray);
});

//Response download

app.get("/five",(req,res)=>{
    res.download("./upload/website.png");
});

//Response Redirect
app.get("/Bangladesh",(req,res)=>{
    res.redirect("http://localhost:8000/India");
});

app.get("/India",(req,res)=>{
    res.send("This is India");
});


//Response Header

app.get("/six",(req,res)=>{
    res.append("name","Niloy");
    res.append("city","Dhaka");
    res.append("age","24");
    res.status(201).end("Response Header is working");
});

//Response Cookie

app.get("/seven",(req,res)=>{
    res.cookie('name','niloy');
    res.cookie('age','24');
    res.cookie('city','Dhaka');
    res.end("Cookie response is successful");
});


//Response Clear Cookie
app.get("/eight",(req,res)=>{
    res.clearCookie('name');
    res.end("Clear Cookie response is successful");
});

app.listen(8000,()=>{
    console.log("Server run successful");
});

/*
-> C=>Create=POST() 
-> R=>Read=GET()
-> U=>UPDATE=PUT(), PATCH()
-> D=>DELETE=DELETE()
*/

