const express = require("express");
const bodyParser = require("body-parser");
const pino = require("express-pino-logger")();

const app = express();
app.use(bodyParser.urlencoded({extended:false}))
app.use(pino);

app.get("/api/greetin", (req,res) =>{
    const name = req.query.name || "World";
    res.setHeader("Content-Type", "Application/json");
    res.send(JSON.stringify({greeting: `Hello ${name}!`}));
});

app.listen(3001, () => 
console.log("Express server is running on Local Host 3001"));