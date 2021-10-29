var express = require('express')
var method = require('method-override')
var option = require('./utils/reloadly')
var request = require('request')
var bodyParser = require('body-parser')
var app = express()

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended:true}))
app.use(method('_method'))
var port = process.env.PORT || 3000
app.set('view engine', 'ejs')

app.get('/', function(req, res){
  res.render('home')
})
app.get('/airtime', function(req, res){
  res.render('airtime')
  res.redirect('/postairtime')
})
app.post('/postairtime', function(req, res){
  var fullname = req.body.fullname
  var phonenumber = req.body.phonenumber
  var email = req.body.email
  var amount = req.body.amount

 request(option(amount, email, phonenumber, fullname), function (error, response) {
 if(error){
   console.log(error)
 }else{
  return res.render('request', {response:response})
 }
});
})

app.listen(port, function(){
  console.log('server is running on port 3000')
})