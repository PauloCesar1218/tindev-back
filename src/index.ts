import express from 'express';
import cors from 'cors';
import mysql from 'mysql';
import routes from './routes';
import database from './database/connectionFactory';
import bodyParser from 'body-parser';

class App {
    public express: express.Application;
    public connection: mysql.Connection;
    private port: number | string  = process.env.PORT || 5000;

    public constructor() {
        this.express = express();
        this.express.listen(this.port, () => console.log('Server listening on port', this.port));

        this.middlewares();
        this. connection = database.connectDatabase();
        // this.connection = this.databaseConnection();
        this.routes();
    }

    private middlewares() {
        // parse application/x-www-form-urlencoded
        this.express.use(bodyParser.urlencoded({ extended: false }))
        // parse application/json
        this.express.use(bodyParser.json())
        // Allow Cross-Origin Resource Sharing
        this.express.use(cors());
    }

    private routes() {
        this.express.use(routes);
    }
}

export default new App()
