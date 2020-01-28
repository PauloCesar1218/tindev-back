import app from '../src/index';

class socketEvents {
    
    public constructor() { }

    public onConnection(): SocketIO.Namespace {
        return app.io.on('connection', socket => {
            console.log(socket);
        });
    }

}

export default new socketEvents();

