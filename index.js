require('dotenv').config()
const express = require('express');
const app = express();

app.use('/places', require('./controllers/places'))

app.get('/',(req,res)=>{
    res.status(404).send('Hello User')
})

app.get('*',(req,res)=>{
    res.send(`
    <h1>404 Page does not exist</h1>
    `)
})

app.listen(process.env.PORT,(req,res)=>{
    console.log(`Listening on ${process.env.PORT}`)
})