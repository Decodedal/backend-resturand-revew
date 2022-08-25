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
        console.log(place)
        res.render('places/show',{place})
       })
       .catch(err=>{
        console.log(err)
        res.render('error404')
       })
})

//actually sends the edit
router.put('/:id', (req, res) => {
  db.Place.findByIdAndUpdate(req.params.id, req.body)
          .then(()=>{
            res.redirect(`/places/${req.params._id}`)
          })
          .catch(err=>{
            console.log(err)
            res.render('error404')
          })
})


//delete
router.delete('/:id',(req,res)=>{
db.Place.findByIdAndDelete(req.params.id)
        .then(place=>{
          res.redirect('/places')
        })
        .catch(err=>{
          console.log('err',err)
          res.render('error404')
        })
})

//edit route
router.get('/:id/edit', (req, res) => {
    db.Place.findById(req.params.id)
             .then(place =>{
              res.render('places/edit',{place})
             })
             .catch(err =>{
              res.render('error404')
             })
})
//comments
router.post('/:id/comment',(req,res)=>{
  console.log(req.body)
  db.Place.findById(req.params.id)
       .then(place =>{  
        db.comment.create(req.body)
       .then(comment =>{
          place.comments.push(comment.id)
          place.save()
          .then(()=>{
            res.redirect(`/places/${req.params.id}`)
          })
       })
          .catch(err=>{
            res.render('error404')
          })
        })
})

router.post('/:id/rant',(req,res)=>{
  res.send('GET /places/:id/rant stub')
})

router.delete('/:id/rant/:rantId',(req,res)=>{
  res.send('GET / places/:id/rant/:rantId stub')
})

module.exports = router