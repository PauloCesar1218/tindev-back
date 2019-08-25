import express from 'express';
import cors from 'cors';
import mysql from 'mysql';
import routes from './routes';
import bodyParser from 'body-parser';

class App {
    public express: express.Application;
    public connection: mysql.Connection;
    private port = process.env.PORT || 5000;

    public constructor() {
        this.express = express();
        this.express.listen(this.port, () => console.log('Server listening on port', this.port));

        this.middlewares();
        this.connection = this.databaseConnection();
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

    public databaseConnection(): mysql.Connection {
        const conn = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '',
            database: 'tindev',
        });
        conn.connect(err => {
            if (err) {
                console.log('Could not connect to dabase, error ->', err);
            } else {
                console.log('Database connected');
            }
        });
        return conn;
    }

    private routes() {
        this.express.use(routes);
    }
}

export default new App()
