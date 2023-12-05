const express = require("express");
const app = express();
const port = 8081;

const cors = require("cors");
app.use(cors());

const client = require("./db/client");
client.connect();

app.get("/", (req, res) => {
  res.send("TESTING!");
});

app.use("/api", require("./api"));

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
