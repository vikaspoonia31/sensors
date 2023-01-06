var express = require('express');

var app=express();
let i=0;
app.get("/",(req,res)=>{

    // res.sendFile("C:/Users/SB626QZ/Downloads/testcss/sample.txt");
    let temp=Math.floor(Math.random() * (24 - 23 + 1)) + 23;
    let gsr=Math.floor(Math.floor(Math.random() * (720 - 710 + 1)) + 710)
        res.send(`********GSRsensorValue= ${gsr}*************ECGsensorValue= 0***************TEMP: ${temp}DegC`);
        i=i+1;
        //res.redirect("http://localhost:3002/");
});

app.get("/s",(req,res)=>{

    let temp=Math.floor(Math.floor(Math.random() * (24 - 23 + 1)) + 23);
    let gsr=Math.floor(Math.floor(Math.random() * (730 - 721 + 1)) + 721)
    res.send(`********GSRsensorValue= ${gsr}*************ECGsensorValue= 0***************TEMP: ${temp}DegC`);
    i=i+1;

})

app.listen(3002,()=>{
    console.log("Running Express App");
});