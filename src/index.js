const express = require('express')
const app = express()
const port = 3000
const path = require('path')
const route = require('./routes')
const morgan = require('morgan')

const handlebars  = require('express-handlebars');
//http logger
//app.use(morgan('combined'))

//gui dữ liệu
app.use(express.urlencoded({
  extended:true}
  ))//middeware xử lý
app.use(express.json())// js gửi lên đã có json xử lý

//xmlhttprequest, fetch, axios


app.use(express.static(path.join(__dirname,'public')))
//template engine
//app.engine('handlebars', handlebars());
app.engine('hbs', handlebars({extname: '.hbs'}));

//app.set('view engine', 'handlebars');
app.set('view engine', 'hbs');

app.set('views', path.join(__dirname,'resources/views'))


//console.log('PATH:',path.join(__dirname,'resources/views'));


//route init // khởi tạo tuyế đường
route(app)

// app.get('/searchh',(req,res)=>{
//   res.render('search')
// })

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})