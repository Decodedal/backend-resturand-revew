const express = require('express');
const app = express();

app.get('/',(req,res)=>{
    res.send('i like to move it move it')
})

app.listen(3333,(req,res)=>{
    console.log('working on 3333')
})