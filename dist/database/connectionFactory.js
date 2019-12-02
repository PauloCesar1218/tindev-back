"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mysql_1 = __importDefault(require("mysql"));
class Connection {
    constructor() {
        this.conn = mysql_1.default.createConnection({
            host: 'localhost',
            user: 'root',
            password: '',
            database: 'tindev',
        });
    }
    connectDatabase() {
        this.conn.connect(err => {
            if (err) {
                console.log(err);
            }
            else {
                console.log('Database connected');
            }
        });
        return this.conn;
    }
}
exports.default = new Connection();
