const express = require('express');
const app = express();
const PORT = 3001;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
};

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/build/index.html'));
});

//NOT USED CURRENTLY
const nodemailer = require('nodemailer');
require('dotenv').config();

const sgMail = require('@sendgrid/mail')

app.post('/send', function (req, res) {
    sgMail.setApiKey(process.env.SENDGRID)
    const msg = {
        to: 'elliottdombrowski@gmail.com', // Change to your recipient
        from: 'elliottroyal@me.com', // Change to your verified sender
        subject: req.body.name,
        // text: req.body.message,
        html: `<strong>${req.body.message}</strong>`,
    }
    sgMail
        .send(msg)
        .then(() => {
            console.log('Email sent')
        })
        .catch((error) => {
            console.error(error)
        })
});

app.listen(PORT, () => { console.log(`Listening on port ${PORT}`) });