const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = 8080;

// Middleware
app.use(cors());
app.use(express.json()); // for parsing application/json

// Email sending route
app.post('/send-email', async (req, res) => {
    const { name, email, selectedPlan, idea } = req.body;

    // Create a transporter using your email service details
    // You'll need to replace these with your actual email service credentials
    const transporter = nodemailer.createTransport({
        service: 'gmail', // e.g., 'gmail', 'outlook', 'SendGrid'
        auth: {
            user: process.env.EMAIL_USER, // Your email address
            pass: process.env.EMAIL_PASS, // Your email password or app-specific password
        },
    });

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: 'kicoa24@gmail.com', // The recipient email address
        subject: `New Idea Submission - ${selectedPlan} Plan from ${name}`,
        html: `
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Selected Plan:</strong> ${selectedPlan}</p>
            <p><strong>Idea Details:</strong></p>
            <p>${idea}</p>
        `,
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).send('Email sent successfully!');
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).send('Error sending email.');
    }
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});