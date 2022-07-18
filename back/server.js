const express = require("express");
const cors = require("cors");
require("dotenv").config();

const formData = require("form-data");
const Mailgun = require("mailgun.js");
const mailgun = new Mailgun(formData);
const mg = mailgun.client({
  username: "ibrahim",
  key: process.env.MAILGUN_API_KEY,
});

const app = express();
app.use(cors());
app.use(express.json());

app.post("/send-email", (req, res) => {
  console.log(req.body);
  try {
    mg.messages
      .create("sandbox5a11cb6a346e46cda4baf2e728ee8db3.mailgun.org", {
        from: `${req.body.firstname} ${req.body.lastname} <${req.body.email}>`,
        to: "ibravoch3011@gmail.com",
        objet: req.body.object,
        text: req.body.message,
      })
      .then((msg) => res.json(msg.message)) // logs response data
      .catch((err) => res.json(err.message)); // logs any error
  } catch (error) {
    res.status(400).json(error.message);
  }
});

app.all("*", (req, res) => {
  res.status(404).json("Cette route n'existe pas");
});

app.listen(process.env.PORT, () => {
  console.log("Server is gooo");
});
