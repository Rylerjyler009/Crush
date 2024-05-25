import express from "express";

const app=express();
const port=3000;

app.use(express.static("public"));

app.get("/", (req,res)=>{
    res.render("index.ejs");
});


app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
// let vid=document.querySelector("video");
// vid.playbackRate=0.25

// document.getElementById("but").onclick=function(){
//     location.href="www.youtube.com";
// };


// app.listen(port, () => {
//     console.log(`Server running on port ${port}`);
//   });