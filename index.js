const express = require("express");
const cors = require("cors");
const app = express();

const { PORT = 3000 } = process.env;

app.get("/cors", cors(), (req, res) => {
  res.send("CIAO");
});

app.get("/no-cors", (req, res) => {
  res.send("CIAO");
});

app.listen(PORT, () => {
  console.log("server started");
});
