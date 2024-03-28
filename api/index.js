import  express  from "express";

const app=express()
const portNom=3000;
app.listen("portNom",()=>console.log("server is runing on port "+ portNom))