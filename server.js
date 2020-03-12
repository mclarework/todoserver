const express = require("express");
const bodyParser = require("body-parser");
const { getData, addEmail, remove } = require("./mongo-app.js");

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
    res.send({data:response});
  });

app.get("/add", async (req, res) => {
  await addEmail(req.query.address)
});

app.get("/remove", async (req, res) => {
  await remove(req.query.address)
});



app.listen(port, () => {
    console.log(`server is running on ${port}`)
});
