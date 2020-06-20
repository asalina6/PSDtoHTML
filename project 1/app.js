const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const chalk = require('chalk');
const path = require('path');
const sgMail = require('@sendgrid/mail');

const app = express();
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());


app.use('/public', express.static(path.join(__dirname,'public')));

app.get('/', (req,res)=>{
    res.sendFile(path.join(__dirname,'public','index.html'));
});

app.post('/send', (req,res)=>{
    console.log(req.body);
    const msg = {
                 to: 'armandosalinasiiiarizona@gmail.com',
                 from: 'armandosalinasiiiarizona@gmail.com',
                 subject: 'Sending with Twilio SendGrid is Fun',
                 text: 'and easy to do anywhere, even with Node.js',
                 html: '<strong>and easy to do anywhere, even with Node.js</strong>',
                 };

                 sgMail
                 .send(msg)
                 .then(() => {}, error => {
                   console.error(error);
               
                   if (error.response) {
                     console.error(error.response.body)
                   }
                 });               
});

app.listen(3000, ()=>console.log(chalk.green('Server started...')));




  