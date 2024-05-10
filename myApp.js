const express = require('express');
const app = express();
require('dotenv').config()
const bodyParser = require("body-parser");

/*//#1
console.log("Hello World")

//#2

app.get("/", (req, res) => {
    res.send("Hello Express");
  })*/

//#3
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

//#4
app.use("/public", express.static(__dirname + "/public"));

//#5

app.get("/json", (req, res) => {
  res.json({message: "Hello json"});
});

//#6
app.get("/json", (_req, res) => {
  if (process.env.MESSAGE_STYLE == "uppercase") {
      res.json({message: "HELLO JSON"})
  } else {
      res.json({message: "Hello json"})
  }

});

//#7

app.use((req, res, next) => {
  console.log('Request Type:', req.method + " " + req.path + " - " + req.ip)
  next()
});


//#8
app.get("/now", (req, res, next) => {
  req.time = new Date().toString();
  next();
},
(req, res) => { res.send({time: req.time});
}
);


//#9

app.get("/:word/echo", (req, res) => {
  const { word } = req.params;
  res.json({echo: word});
});


//#10

app.get("/name", (req, res) => {  
  res.json({name: req.query.first + " " + req.query.last});
});


//#11

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


//#12

app.post("/name", function(req, res) {
  res.json( {  name: req.body.first + " " + req.body.last } );
});





module.exports = app;
  });
