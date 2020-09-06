const express = require("express");
const nodemailer = require("nodemailer");

const app = express();

app.get("/mailer", (req, res) => {
  res.send("Hello");
});

app.listen(5000),
  () => {
    console.log("Server started...");
  };
