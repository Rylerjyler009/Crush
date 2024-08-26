import express from "express";
import pg from "pg";

const app=express();
const port=3000;

// const db=new pg.Client({
//   user:"postgres",
//   host:"localhost",
//   database:"tokyo",
//   password:"Chan95shin@"
// });

// db.connect();

app.use(express.static("public"));

app.get("/", (req,res)=>{
    res.render("index.ejs");
});


app.get("/keep", async(req, res)=>{
  res.render("keep.ejs");
});


app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });