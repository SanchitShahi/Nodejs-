var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'sanchitshahi1101999@gmail.com',
    pass: 'Hellboy123@'
  }
});




function sendEmail(email,link){
  var mailOptions = {
    from: 'sanchitshahi1101999@gmail.com',
    to: email,
    subject: 'sent from node js',
    text: link
  };
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
  

};
module.exports=sendEmail;