const router = require("express").Router();
const {errorHandler,ErrorConstructor} = require('../middleware/errorHandler')


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


router.get('/', (req, res,next) => {
    // res.send("this is the way")
    next(new ErrorConstructor("This is the way error"))
    // next()
})

router.get('/newLogin', (req, res) => {
    console.log(146)
    res.status(200)
    // res.render('mess.html')
    // res.sendFile('mess.html')
    res.sendFile('path.join(__dirname,')
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

router.get('/*', (req, res,next) => {
    next(new ErrorConstructor('Not a valid request !! 😟', 404))
})

router.use(errorHandler);

module.exports = router;