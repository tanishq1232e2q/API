const express=require("express")

const port =8000;
const app=express()

data=require("./data.json")


console.log(data[0].list.name.n1);

app.get("/",(req,res)=>{
    res.send("hello")
})
app.get("/data",(req,res)=>{
res.send(data[0].list)
})
app.get("/hobby",(req,res)=>{
res.send(data[0].Hobby)
})



app.listen(port,()=>{
    console.log("working");
})

