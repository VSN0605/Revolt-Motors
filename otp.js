const express = require('express');
const bodyParser = require('body-parser');
const twilio = require('twilio');

const app = express();
app.use(bodyParser.json());

// Twilio credentials
const accountSid = 'your_account_sid';
const authToken = 'your_auth_token';
const client = new twilio(accountSid, authToken);
const twilioPhoneNumber = '9307658758';

// POST endpoint to send OTP
app.post('/sendOTP', (req, res) => {
  const { mobileNumber } = req.body;
  const otp = Math.floor(100000 + Math.random() * 900000); // Generate 6-digit OTP
  
  client.messages
    .create({
      body: `Your OTP is: ${otp}`,
      from: twilioPhoneNumber,
      to: mobileNumber
    })
    .then(() => {
      res.status(200).send('OTP sent successfully.');
    })
    .catch(err => {
      console.error('Error sending OTP:', err);
      res.status(500).send('Failed to send OTP.');
    });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
