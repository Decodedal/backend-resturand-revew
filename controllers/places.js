const router= require('express').Router()
const places = require('../models/places')
const db = require('../models')

//index
router.get('/',(req,res)=>{    
    db.Place.find()
    .then(places=>{
      res.render('places/index',{places})
    })
    .catch(err=>{
      console.log(err)
      res.render('error404')
    })
})
//create
router.post('/',(req,res)=>{
   db.Place.create(req.body)
   .then(()=> {
    res.redirect('places')
   })
   .catch(err =>{
    console.log(err)
    res.render('error404')
   })
  })

router.get('/new',(req,res)=>{
  res.render('places/new')
})

//SHOW
router.get('/:id',(req,res)=>{
    db.Place.findById(req.params.id)
       .populate('comments')
       .then(place=>{
        console.log(place.comments)
        res.render('places/show',{place})
       })
       .catch(err=>{
        console.log(err)
        res.render('error404')
       })
})


router.put('/:id', (req, res) => {
  res.send('PUT /places/:id stub')
})



router.delete('/:id',(req,res)=>{
res.send('DELEATE /places/:id stub')
})

router.get('/:id/edit', (req, res) => {
  res.send('GET edit form stub')
})


router.post('/:id/rant',(req,res)=>{
  res.send('GET /places/:id/rant stub')
})

router.delete('/:id/rant/:rantId',(req,res)=>{
  res.send('GET / places/:id/rant/:rantId stub')
})

module.exports = router