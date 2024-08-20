const express = require("express");
const app = express();
const db = require("./db");
const bodyParser = require("body-parser");
app.use(bodyParser.json());
require('dotenv').config();
const port = process.env.PORT||3000;

app.get("/", (req, res) => {
  res.send("Hello, World!");
});
// app.get('/idle', (req,res)=>{
//     res.send('idle working')
// })



const personRouters = require('./personRouter');
app.use('/person', personRouters);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
