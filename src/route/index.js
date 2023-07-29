
const postRoute = require('./post.route')
const accountRoute = require('./account.route')

function route(app) {
    app.use('/post', postRoute)
    app.use('/account', accountRoute)
}

module.exports = route