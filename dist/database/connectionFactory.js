"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mysql_1 = __importDefault(require("mysql"));
var Connection = /** @class */ (function () {
    function Connection() {
        this.conn = mysql_1.default.createConnection({
            host: 'localhost',
            user: 'root',
            password: '',
            database: 'tindev',
        });
    }
    Connection.prototype.connectDatabase = function () {
        this.conn.connect(function (err) {
            if (err) {
                console.log(err);
            }
            else {
                console.log('Database connected');
            }
        });
        return this.conn;
    };
    return Connection;
}());
exports.default = new Connection();
