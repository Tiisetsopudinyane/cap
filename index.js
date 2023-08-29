import express from 'express';
import cors from 'cors';
import {insert,getData} from './db.js'


const app = express(); 
app.use(express.static('public'))
app.use(express.json())
app.use(cors());

app.post('/api/data',async function (req,res){
    const first_name=req.body.first_name;
    const last_name=req.body.last_name;
    const stuNo=req.body.stuNo;
    const photo=req.body.photo;

  // await insert(first_name,last_name,stuNo,photo);
  
  //
  //i commented this await insert method to stop the API from storing the data for now
  //
  //await insert(first_name, last_name, stuNo, photo) 
    
  res.json({
    "message":"inserted"
  })
})

app.get('/api/fetching',async function(req,res){

  const getdata = await getData();
   
   res.json({
    getdata
   })
})

//console.log(getdata)
const PORT = process.env.PORT || 4021;
app.listen(PORT, () => `Server started ${PORT}`)