const express= require("express");
const { dirname } = require("path");
const hbs=require("hbs");
const app= express();
const port=process.env.PORT || 8000;
const path=require("path");
const staticpath=path.join(__dirname,"../public");
const templatepath=path.join(__dirname,"../templates/views");
const partialpath=path.join(__dirname,"../templates/partials");

app.set("view engine","hbs");
app.set("views",templatepath);
hbs.registerPartials(partialpath);


app.use(express.static(staticpath));

app.get("",(req,res)=>{
res.render("index");
});
app.get("/about",(req,res)=>{
  res.render("about");
});
app.get("/weather",(req,res)=>{
    res.render("weather");
   });
   app.get("*",(req,res)=>{
      res.render("404error",{
        errorMsg:"Oops page not found"
      })
      });
 
app.listen(port,()=>{
    console.log("listening");
});
