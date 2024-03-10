const express = require('express');
const cors = require('cors');
const connectDB = require('./config/database');
const http = require('http');
const EventEmitter = require('node:events');
const eventEmitter = new EventEmitter();
require("dotenv").config();
//db connect
connectDB()

const app = express();
const server = http.createServer(app);
//parsers
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.text());
app.use(cors());
app.use('/', require('./router'))
app.get('/', (req, res) => {
    res.send('Notification server started')
})

require('./socket/socket')(server)

server.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});
