let express = require('express');
let app = express();
module.exports = app;
console.log("Hello World")
app.get("/", function(req, res) {
    res.sendFile(__dirname + "/views/index.html");
    app.use("/public", express.static(__dirname + "/public"));
  });


let express = require('express');
let app = express();
require('dotenv').config()

// console.log(“Hello World”);

app.get("/", (req,res) => {
res.sendFile(__dirname + "/views/index.html")
})

// Assets at the /public route
app.use('/public', express.static(__dirname + '/public'));

app.get('/json', (req, res) => {
var response;
if (process.env.MESSAGE_STYLE) {
response = {"message": "HELLO JSON"}
} else {
response = {"message": "Hello json"}
}
res.json(response)
});
