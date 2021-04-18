"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const routes_1 = __importDefault(require("./routes"));
const connectionFactory_1 = __importDefault(require("./database/connectionFactory"));
const body_parser_1 = __importDefault(require("body-parser"));
const socket_io_1 = __importDefault(require("socket.io"));
const http_1 = require("http");
class App {
    constructor() {
        this.port = process.env.PORT || 5000;
        this.express = express_1.default();
        this.server = http_1.createServer(this.express);
        this.server.listen(this.port, () => console.log('Server listening on port', this.port));
        this.middlewares();
        this.connection = connectionFactory_1.default.connectDatabase();
        this.routes();
        this.socketEvents();
    }
    middlewares() {
        this.express.use(body_parser_1.default.urlencoded({ extended: false }));
        this.express.use(body_parser_1.default.json());
        this.express.use(cors_1.default());
    }
    routes() {
        this.express.use(routes_1.default);
    }
    socketEvents() {
        this.io = socket_io_1.default(this.server);
        this.io.on('connection', socket => {
            console.log(socket.id, 'socket user id');
            socket.on('join-room', room => {
                console.log(room);
                socket.join(room);
                console.log(socket.rooms, 'room name');
            });
            socket.on('sendMessage', ({ message, id, room }) => {
                console.log({ message, room });
                socket.to(room).emit('message', { content: message, user: id });
            });
            socket.on('disconnect', () => console.log(`User ${socket.id} disconnected`));
        });
    }
}
exports.default = new App();
