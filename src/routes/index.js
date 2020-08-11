const newRoute = require('./news')
const siteRoute = require('./site')
// const siteRoute = require('./site')
// const searchRoute = require('./search')
// const controller = require('../app/controllers/NewsController')
function route(app){
    // app.get('/search',controller.search)
    // app.get('/news',controller.news)
    // app.get('/news/:slug',controller.newss)
    // app.get('/test',controller.test)
    // app.get('/',controller.index)
    // app.get('/',siteRoute)
    app.use('/news',newRoute)
    app.use('/',siteRoute)
}
module.exports= route