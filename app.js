const express = require('express');
const path = require('path');
const helmet = require('helmet')
const app = express();
require('dotenv').config()

const port = process.env.PORT || 80;

// login handler

// basic pages ROUTES 

// add api rooute then jse 


if (process.env.NODE_ENV == "production") {
    app.use(express.static('frontend/build'))
    app.get("/site/*", (req, res) => {
        res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
    })
}


app.get('/', (req, res) => {
    res.status(200)
    // res.render('mess.html')
    // res.sendFile('mess.html')
    res.sendFile(path.join(__dirname, 'views/mess.html'))
})

app.get('/newLogin', (req, res) => {
    res.status(200)
    // res.render('mess.html')
    // res.sendFile('mess.html')
    res.sendFile(path.join(__dirname, 'views//mess.html'))
})

app.get('/newEventRequest', (req, res) => {
    res.status(200)
    // res.render('mess.html')
    // res.sendFile('mess.html')
    res.sendFile(path.join(__dirname, 'views//mess.html'))
})


app.get('/confirmTheEvent', (req, res) => {
    res.status(200)
    // res.render('mess.html')
    // res.sendFile('mess.html')
    res.sendFile(path.join(__dirname, 'views//mess.html'))
})



app.listen(port, () => {
    console.log(`server is listening on http://localhost:${port}`)
})