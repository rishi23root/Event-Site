const jwt = require('jsonwebtoken')
const secret = process.env.JWT_SECRET || "Testing "

// Token handler 
const TokenHandler = (req,res,next) => {
    // haadle the new request 
    // if req.have the token then 
     
}

// create Token 
const getToken = (authField) => {
    return jwt.sign({
        data: authField,
        message: 'so you parse token, that is nice, but why thought'
    }, secret);
}
// console.log(getToken('test it out'))

const checkToken = (token) => {
    return new Promise((resolve, reject) => {
        jwt.verify(token, secret, (err, decoded) => {
            if (err){
                reject(err)
            }
            else {
                resolve(decoded)
            }
        });
    })
}
// const test = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjoidGVzdCBpdCBvdXQiLCJtZXNzYWdlIjoic28geW91IHBhcnNlIHRva2VuLCB0aGF0IGlzIG5pY2UsIGJ1dCB3aHkgdGhvdWdodCIsImlhdCI6MTYzNDYzNDQzNX0.JYoL5iUnSZA32w8p7AGbmBUvWfePcXR5qRWwDrYdD3Q'
// checkToken(test)
//     .then(console.log)

module.exports = {
    TokenHandler,
    getToken,
    checkToken,
}