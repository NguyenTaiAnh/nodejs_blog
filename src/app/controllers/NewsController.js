
class NewsController{
    //đặt phuong thức là index
    //phương thức GET, path là /news
    test(req,res){
        res.render('test')
    }

    show(req,res){
        res.send('asdasdasdasd')
    }
}
module.exports= new NewsController
// module.exports.index=function(req,res){
//     res.render('home')
// }
// module.exports.test=function(req,res){
//     res.render('test')
// }
// module.exports.search=function(req,res){
//     res.render('search')
// }
// module.exports.news=function(req,res){
//     res.render('news')
// }
// module.exports.newss=function(req,res){
//     res.send('Hello World')
// }
