const express=require("express")
const app=express();

const {add,sub,name}=require("./Oparator")
console.log(add(5,5))
console.log(sub(10,5))
console.log(name)
const middleware=(req,res,next)=>{
    let result=add(5,5)
    if(result===13){
        console.log("het yhis in middleware")
    next()
    }
    else{
        res.status(400).send("you are not allowed")
    }
    

}

const middleware2=(req,res,next)=>{
    console.log("het yhis in middleware2")
    let id=name;
    if(id===name){
    next()
    }
    else{
        res.status(400).send("you are not allowed")
    }

}




const port=3000
app.get("/",(req,res)=>{
    res.write("hello boss" )
    res.end()
})

app.get("/about", middleware,(req,res)=>{
    res.end("about")
})

app.get("/contact",middleware2,(req,res)=>{
    res.end("contact")
})

app.post("/submit",(req,res)=>{
     res.end("subimt")
})

app.listen(port,()=>{
    console.log("done")
})