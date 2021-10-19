const express = require('express');
const path = require('path');
const helmet = require('helmet')
const app = express();
const port = process.env.PORT || 80;
const cors = require('cors');
const cookieParser = require('cookie-parser');
require('dotenv').config()

// just for testing 
console.log(process.env.NODE_ENV)
app.use((req, res, next) => {
    console.log("url - ", req.url, "\tIp -", req.ip)
    next()
});

// ############ middlewares ################
app.locals.basedir = __dirname;
app.use(express.json());
app.use(cors())
app.use(cookieParser());
// app.use(helmet({
//     contentSecurityPolicy:
//         (process.env.NODE_ENV === 'production')
//             ? undefined
//             : false
// }));
app.use("/api/", require("./api/api"));
// ############ ############ ################

// if in the production 
if (process.env.NODE_ENV == "production") {
    app.use(express.static('frontend/build'))
    app.get("/*", (req, res) => {
        res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
    })
}

app.listen(port, () => {
    console.log(`server is listening on http://localhost:${port}`)
})