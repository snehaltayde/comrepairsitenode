var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('contact', {
     title: 'Contact',

   });
});

router.post('/send', function (req, res, next) {
var transporter = nodemailer.createTransport({
service: 'Gmail',
auth: {
  user: 'webbybuzz@gmail.com',
  pass: 'Snehal-Chhaya-123'
}
});

var mailOptions = {
  from: '"Snehal Tayde", <webbybuzz@gmail.com>',
  to: 'snehal@mediastic.in',
  subject: `New Enquiry Recieved from ${req.body.name}`,
  text: `You have Message from Name : ${req.body.name} Email: ${req.body.email} Message: ${req.body.message}`,
  html: `<p> You have Message from</p> <ul> <li> Name : ${req.body.name}</liv> <li> Email: ${req.body.email}</li> <li> Message: ${req.body.message}</li> </ul>`
};

transporter.sendMail(mailOptions, function (error, info) {
if(error){
  console.log(error);
}
console.log('Mail Sent', info);
res.redirect('/');
})
});

module.exports = router;
