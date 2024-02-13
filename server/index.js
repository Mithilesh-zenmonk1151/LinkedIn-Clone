const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const database = require("./config/database");
const cors = require("cors");
const PORT = process.env.PORT || 4001;
database.connect();
app.use(express.json());
app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);
app.use("/api", require('./routes'));

app.get("/", (req, res) => {
  return res.json({
    success: true,
    message: "Your server is up and running ...",
  });
});
app.listen(PORT, () => {
  console.log(`App is listening at ${PORT}`);
});
