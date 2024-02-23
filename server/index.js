const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const database = require("./config/database");
const cors = require("cors");
const PORT = process.env.PORT || 4001;
database.connect();
const multer= require("multer");
const path= require("path");
app.use(express.json({extended:true}));
app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);
app.use('/uploads', express.static(path.join(__dirname,'uploads'))) 
app.use("/api", require("./routes"));
app.listen(PORT, () => {
  console.log(`App is listening at ${PORT}`);
});
