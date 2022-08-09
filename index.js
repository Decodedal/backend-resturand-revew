require('dotenv').config()
const express = require('express');
const app = express();
//Express Settings
app.set('views',__dirname + "/views")
app.set('view engine','jsx')
app.engine('jsx',require('express-react-views').createEngine())
app.use(express.static('public'))
//parser
app.use(express.urlencoded({extended:true}))

app.use('/places/', require('./controllers/places'))

app.get('/',(req,res)=>{
    // res.status(404).send('Hello User')
    res.render('home')
})


app.get('*',(req,res)=>{
   res.render('error404')
})

app.listen(process.env.PORT,(req,res)=>{
    console.log(`Listening on ${process.env.PORT}`)
})