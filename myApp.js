let express = require('express');
let app = express();
module.exports = app;
console.log("Hello World")
app.get("/", function(req, res) {
    res.sendFile(__dirname + "/views/index.html");
    app.use("/public", express.static(__dirname + "/public"));
  });
