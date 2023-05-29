const nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
    server:'',
    auth: {
      user: 'jokis22629@duscore.com',
      pass: ''

    },
    tls: {
      // do not fail on invalid certs
      rejectUnauthorized: false
  },
  });
  
var mailOptions = {
  
    from: 'jokis22629@duscore.com',
    to: 'behobo8905@farebus.com',
    subject: 'Sending Email using Node.js',
    text: 'Check Point Node JS is Done '
  }
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });