"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("./../index"));
class userDao {
    constructor() { }
    getUsers(params, callback) {
        index_1.default.connection.query(`
            SELECT * FROM user
        `, callback);
    }
    insertUser(params, callback) {
        const query = index_1.default.connection.query(`
            INSERT INTO user (github_username, age, email, password) VALUES (?, ?, ?, ?);
        `, [params.github_username, params.age, params.email, params.password], callback);
        console.log(query.sql);
    }
}
exports.default = new userDao();
