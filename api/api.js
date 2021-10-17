const router = require("express").Router();


// handle all the data for the animaton


// database field
// heading-topic
// sumary
// date 
// room 
// by
// viewed by
// isConfirmed


// login handler

// basic pages ROUTES 

// add api rooute then jse 


router.get('/', (req, res) => {
    res.send("this is the way")

})

router.get('/', (req, res) => {
    res.status(200)
    res.sendFile(path.join(__dirname, 'views/mess.html'))
})

router.get('/newLogin', (req, res) => {
    res.status(200)
    // res.render('mess.html')
    // res.sendFile('mess.html')
    res.sendFile(path.join(__dirname, 'views//mess.html'))
})

router.get('/newEventRequest', (req, res) => {
    res.status(200)
    // res.render('mess.html')
    // res.sendFile('mess.html')
    res.sendFile(path.join(__dirname, 'views//mess.html'))
})


router.get('/confirmTheEvent', (req, res) => {
    res.status(200)
    // res.render('mess.html')
    // res.sendFile('mess.html')
    res.sendFile(path.join(__dirname, 'views//mess.html'))
})

module.exports = router;