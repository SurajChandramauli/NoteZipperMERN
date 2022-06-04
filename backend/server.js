const notes = require("./data/notes");

const dotenv = require('dotenv');
dotenv.config();

const express = require("express");


const app = express();


app.get('/',(req,res)=> {
    res.send("APi is running")
})


app.get('/api/notes',(req,res)=>{
    res.json(notes);
})


app.get('/api/notes/:id',(req,res)=>{


    var n = req.params.id
    const note = notes.find(x=>x._id==n)
    //const note = notes[n-1];
  
res.send(note);

})



const PORT = process.env.PORT ||  5000;

app.listen(PORT,console.log(`server started on port ${PORT}`));


 