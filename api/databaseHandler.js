const mongoose = require("mongoose")
require('dotenv').config()

// connection to mongoose
mongoose.connect(
    `mongodb+srv://${process.env.DBURIANDPASS}-7ayur.mongodb.net/socialHACK?retryWrites=true&w=majority`,
    {
        useNewUrlParser: true,
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    })
    .then(_ => console.log('connected to database 😎'))
    .catch(console.error)

// create schema for login
const userSchema = mongoose.Schema({
    _id: mongoose.Schema.ObjectId,
    useremail: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
}, { timestamps: true })

const EventSchema = mongoose.Schema({
    _id: mongoose.Schema.ObjectId,
    createdBy: {
        type: String,
        required: true,
    },
    confirmedBy: {
        type: [Schema.Types.ObjectId],
    },
    clubName: {
        type: String,
    },
    tittle: {
        type: String,
    },
    discription: {
        type: String,
    },
    venue: {
        type: Schema.Types.ObjectId,
    },
    date: {
        type: Date,
    },

}, { timestamps: true })

// venue for the event with date
// club name database 


const instadata = mongoose.model('instaLogins', userSchema)
const facebookdata = mongoose.model('facebookLogins', EventSchema)


// field
// to make the request for a new event
// 1. created by username 
// 2. updated for the user 
