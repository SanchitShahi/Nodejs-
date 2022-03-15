var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'sanchitshahi1101999@gmail.com',
    pass: 'Hellboy123@'
  }
});

var mailOptions = {
  from: 'sanchitshahi1101999@gmail.com',
  to: 'sanchitshahi11091999@gmail.com',
  subject: 'sent from node js',
  text: 'nodeMain'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});