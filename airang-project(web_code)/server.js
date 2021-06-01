var express = require("express");
var app = express();
var bp = require("body-parser");
var path = require("path");

app.use(express.static(path.join(__dirname, "./client")));
app.use(express.static(path.join(__dirname, "./node_modules")));

app.use(bp.json());

app.get("/", function (req, res) {
  res.sendFile("index.html");
});

app.listen(8000, function () {
  console.log("listening on 8000");
});
