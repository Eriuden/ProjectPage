const jwt = require ("jsonwebtoken")
const UserModel = require ("../models/users.model")

module.exports.checkUser = (req, res, next) => {
    const token = req.cookies.jwt
    if (token) {
        jwt.verify(token, process.env.TOKEN_SECRET, async (err, decodedToken) => {
            if (err) {
                res.locals.user = null
                res.cookies("jwt", "", {maxAge: 1})
                next()
            } else {
                let user = await UserModel.findById(decodedToken)
                res.locals.user = user
                next()
            }
        })
    } else {
        res.locals.user = null
        next()
    }
}

module.exports.requireAuth = (req, res, next) => {
    const token = req.cookies.jwt
    if (token) {
        jwt.verify(token, process.env.TOKEN_SECRET, async (err, decodedToken) => {
            if (err) {
                console.log(err)
            } else {
                console.log(decodedToken.id)
                next()
            }
        })
    } else {
        console.log("pas de token")
    }
}