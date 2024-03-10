const { Server } = require("socket.io")
const emitterFile = require("../config/emmiter");
const myEmitter = emitterFile.emitter;
module.exports = async (server) => {
    const io = new Server(server, {
        cors: {
            origin: "http://localhost:3000",
        },
    })

    const user = {};
    var me;
    io.on('connection', (socket) => {
        console.log("connection noti on: ", socket.id);
        // console.log('user: ', user);
        socket.on("userid", (data) => {
            console.log("data", data);
            user[data] = socket.id;
            me = data
        })
        socket.on("disconnect", () => {
            console.log("disconnect");
        })
        myEmitter.on('test', (res) => {
            console.log('worked!', res);
            const id = res.receiver[0]
            io.to(`${user[id]}`).emit('hey', 'I just met you');
        });
    })
}