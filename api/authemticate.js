const { v4: uuidv4 } = require('uuid');
const cookieParser = require('cookie-parser');


// aser cookies auth 
// and timestant update with server update

// check validity of the 
    // cookie 
    // authentication code

const checkCookie = (req, res, next) => {
    // cookies authenticaiton and passing to the next step if not 
    const { authorization } = req.headers;
    if (!authorization) {
        return res.status(401).json({ error: "you must be logged in" });
    }
    
    const token = authorization.replace("Bearer ", "");
}


const checkAuth = (req,res,next) =>{

}


module.exports = {
    checkAuth,
    checkCookie
}