const express = require("express");

const path = require("path");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res, next) => {
  res.sendFile(path.join(__dirname, "./", "views", "index.html"));
});
app.listen(port, () => {
  console.log(`${port}`);
});
