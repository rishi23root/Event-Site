const jwt = require('jsonwebtoken')
const secret = process.env.JWT_SECRET || "Testing"
const { ErrorConstructor } = require('../middleware/errorHandler')

// Token handler 
const TokenHandler = (req, res, next) => {
    // check if new request come set token if already have it then check it 
    // console.log('in middleware :', req.header('LoginCredential'))
    if (req.path == '/newLogin' && req.header('LoginCredential') !== undefined) {
        // someone trying to logging send then to the loaging to new account route
        // set up the cookie for the user 
        const dataForJWT = JSON.parse(req.header('LoginCredential'))
        if (!Object.keys(dataForJWT).length) {
            next(
                new ErrorConstructor("Credentials can not be empty, stop playing around 😐", 400)
            )
        }
        else {
            res.cookie(
                'session',
                getToken(
                    dataForJWT
                ),
                {
                    expires: new Date(Date.now() + 60 * 60 * 1000)
                }
            ); // expire in 1h 
            // console.log(req.body.UserEmail);
            res.cookie(
                'UserEmail',
                req.body.UserEmail,
                {
                    expires: new Date(Date.now() + 60 * 60 * 1000)
                }
            ); // expire in 1h 
            next('route')
        }
    } else {
        // check the vaildity of the request if request is vaid then pass to the next step
        // to check cookies
        // console.log(req.cookies['session'])
        checkToken(req.cookies['session'])
            .then(_ => next())
            .catch(err => {
                // console.log(err)
                next(new ErrorConstructor(
                    `Can not validate user, logout and try again plz 😶 
                    ${err}`,
                    400
                ))
            })
    }
}

// create Token 
const getToken = (authField) => {
    if (typeof authField === 'object') {
        return jwt.sign({
            message: 'so you parse token, that is nice, but why thought',
            ...authField,
        }, secret);
    } else {
        return jwt.sign({
            data: authField,
            message: 'so you parse token, that is nice, but why thought'
        }, secret);
    }
}
// console.log(getToken('test it out'))

const checkToken = (token) => {
    return new Promise((resolve, reject) => {
        jwt.verify(token, secret, (err, decoded) => {
            if (err) {
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