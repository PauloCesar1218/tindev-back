"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const mysql_1 = __importDefault(require("mysql"));
const routes_1 = __importDefault(require("./routes"));
const body_parser_1 = __importDefault(require("body-parser"));
class App {
    constructor() {
        this.port = process.env.PORT || 5000;
        this.express = express_1.default();
        this.express.listen(this.port, () => console.log('Server listening on port', this.port));
        this.middlewares();
        this.connection = this.databaseConnection();
        this.routes();
    }
    middlewares() {
        // parse application/x-www-form-urlencoded
        this.express.use(body_parser_1.default.urlencoded({ extended: false }));
        // parse application/json
        this.express.use(body_parser_1.default.json());
        // Allow Cross-Origin Resource Sharing
        this.express.use(cors_1.default());
    }
    databaseConnection() {
        const conn = mysql_1.default.createConnection({
            host: 'localhost',
            user: 'root',
            password: '',
            database: 'tindev',
        });
        conn.connect(err => {
            if (err) {
                console.log('Could not connect to dabase, error ->', err);
            }
            else {
                console.log('Database connected');
            }
        });
        return conn;
    }
    routes() {
        this.express.use(routes_1.default);
    }
}
exports.default = new App();
