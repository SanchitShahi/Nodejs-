var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'sanchitshahi11091999@gmail.com',
    pass: 'Hellboy123+'
  }
});

var mailOptions = {
  from: 'sanchitshahi1109199@gmail.com',
  to: 'thefreakywolf11999@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});