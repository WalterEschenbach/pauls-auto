const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");
const nodemailer = require("nodemailer");

const app = express();
app.use(cors());

app.use("/public", express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/mailer", (req, res) => {
  res.send("hello world");
});

app.post("/mailer", (req, res) => {
  res.send(req.body);
});

// app.post('/send', (req, res) => {
//   const output = `
//     <p>You have a new contact request</p>
//     <h3>Contact Details</h3>
//     <ul>
//       <li>Name: ${req.body.name}</li>
//       <li>Company: ${req.body.company}</li>
//       <li>Email: ${req.body.email}</li>
//       <li>Phone: ${req.body.phone}</li>
//     </ul>
//     <h3>Message</h3>
//     <p>${req.body.message}</p>
//   `;

//   // create reusable transporter object using the default SMTP transport
//   let transporter = nodemailer.createTransport({
//     host: 'mail.YOURDOMAIN.com',
//     port: 587,
//     secure: false, // true for 465, false for other ports
//     auth: {
//         user: 'YOUREMAIL', // generated ethereal user
//         pass: 'YOURPASSWORD'  // generated ethereal password
//     },
//     tls:{
//       rejectUnauthorized:false
//     }
//   });

//   // setup email data with unicode symbols
//   let mailOptions = {
//       from: '"Nodemailer Contact" <your@email.com>', // sender address
//       to: 'RECEIVEREMAILS', // list of receivers
//       subject: 'Node Contact Request', // Subject line
//       text: 'Hello world?', // plain text body
//       html: output // html body
//   };

//   // send mail with defined transport object
//   transporter.sendMail(mailOptions, (error, info) => {
//       if (error) {
//           return console.log(error);
//       }
//       console.log('Message sent: %s', info.messageId);
//       console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

//   });
//   });
// Hello World

app.listen(5000),
  () => {
    console.log("Server started...");
  };
