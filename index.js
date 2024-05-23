require("dotenv").config();
const express = require("express");
const app = express();
const port = 4000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/instagram", (req, res) => {
  res.send("ritik_prakash_");
});

app.get("/login", (req, res) => {
  res.send("<h1>Please Login First</h1>");
});

app.get("/youtube", (req, res) => {
  res.send("<h1>Chai or Code </h1>");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${process.env.port}`);
});
