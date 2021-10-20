const { v4: uuidv4 } = require('uuid');

// aser cookies auth 
// and timestant update with server update

// check validity of the 
    // cookie 
    // authentication code


// create cookies to the user


const checkCookie = (req, res, next) => {
    // cookies authenticaiton and passing to the next step if not 
    const { authorization } = req.headers;
    if (!authorization) {
        res.status(401);
        res.json({ error: "you must be logged in" });
        return 
    }
    
    const token = authorization.replace("Bearer ", "");
}


const checkAuth = (req,res,next) =>{
    
}


module.exports = {
    checkAuth,
    checkCookie
}