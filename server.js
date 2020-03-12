const express = require("express");
const bodyParser = require("body-parser");
const { getData, addEmail } = require("./mongo-app.js");

const app = express();
const port = process.env.PORT || 3010;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header("Allow-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get("/data", async (req, res) => {
    const response = await getData();
    console.log(response);
    res.send({data:response});
  });

app.post("/register", (req, res) => {
  addEmail(req.body.email);
  res.send("POST request sent");
});

app.listen(port, () => {
    console.log(`server is running on ${port}`)
});
