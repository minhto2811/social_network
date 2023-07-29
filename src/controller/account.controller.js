const jwt = require('jsonwebtoken')
const Account = require('../model/account.model')
const SECRET_KEY = process.env.SECRET_KEY
class Controller {
    register(req, res) {
        const data = req.body
        data.password = jwt.sign(data.password, SECRET_KEY)
        Account.create(data).then((rs) => res.json(rs)).catch((err) => res.json(err))
    }
}

module.exports = new Controller