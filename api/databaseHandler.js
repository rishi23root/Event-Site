const mongoose = require("mongoose")
require('dotenv').config()

const DBname = {
    user: 'User',
    event: 'event',
    venue: 'venue',
    clubNames: 'club'
}

// minimun days before pushing new request default time 
const datePadding = 2;

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
        validate: [
            /^[a-z0-9]+[\._]?[a-z0-9]+[@]galgotiasuniversity.edu.in$/,
            'email can not varify, try something example@galgotiasuniversity.edu.in'],
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
        type: Schema.Types.ObjectId,
        ref: DBname.user,
        required: true,
    },
    confirmedBy: [{
        type: Schema.Types.ObjectId,
        ref: DBname.user
    }],
    clubName: {
        type: Schema.Types.ObjectId,
        ref: DBname.clubNames,
    },
    tittle: {
        type: String,
        trim: true,
        required: 'Title cannot be blank'
    },
    discription: {
        type: String,
        trim: true,
        required: 'Discription cannot be blank'
    },
    venue: {
        type: Schema.Types.ObjectId,
        ref: DBname.venue,
        required: 'Venue cannot be Null'
    },
    date: {
        type: Date,
        default: () => new Date(+new Date() + datePadding * 24 * 60 * 60 * 1000)
    },

}, { timestamps: true })

// venue for the event with date
// club name database 


mongoose.model(DBname.user, userSchema)
mongoose.model('event', EventSchema)

// need to work on the database linking form the other database and fetch data from there 

// field
// to make the request for a new event
// 1. created by username 
// 2. updated for the user 
