import express from 'express';
import cors from 'cors';
import {insert,getData} from './db.js'


const app = express(); 
app.use(express.static('public'))
app.use(express.json())
app.use(cors());

app.post('/api',async function (req,res){
    const first_name=req.query.first_name;
    const last_name=req.query.last_name;
    const stuNo=req.query.stuNo;
    const photo=req.query.image64;
  // await insert(first_name,last_name,stuNo,photo);
  const data={first_name,last_name,stuNo,photo}
  console.log(data)
  res.json({
    "message":"inserted"
  })
})
const getdata=await getData();
app.get('/api',async function(req,res){
   
   res.json({
    getdata
   })
})

//console.log(getdata)
const PORT = process.env.PORT || 4021;
app.listen(PORT, () => `Server started ${PORT}`)