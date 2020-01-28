import express from 'express';
import cors from 'cors';
import mysql from 'mysql';
import routes from './routes';
import database from './database/connectionFactory';
import bodyParser from 'body-parser';
import socket from 'socket.io';
import http, { createServer } from 'http';

class App {
    public express: express.Application;
    public connection: mysql.Connection;
    public server: http.Server;
    public io!: SocketIO.Server;
    private port: number | string  = process.env.PORT || 5000;

    public constructor() {
        this.express = express();
        this.server = createServer(this.express);
        this.server.listen(this.port, () => console.log('Server listening on port', this.port));
        this.middlewares();
        this. connection = database.connectDatabase();
        this.routes();
        this.socketEvents();
    }

    private middlewares() {
        this.express.use(bodyParser.urlencoded({ extended: false }))
        this.express.use(bodyParser.json())
        this.express.use(cors());
    }

    private routes() {
        this.express.use(routes);
    }

    private socketEvents() {
        this.io = socket(this.server);
        this.io.on('connection', socket => {
            console.log(socket.id, 'socket user id');
            
            socket.on('join-room', room => {
                console.log(room);
                socket.join(room);
                console.log(socket.rooms, 'room name');
            });

            socket.on('sendMessage', ({message, id, room}) => {
                console.log({message, room});
                socket.to(room).emit('message', {content: message, user: id});
            });

            socket.on('disconnect', () => console.log(`User ${socket.id} disconnected`));
        });
    }

}

export default new App()
