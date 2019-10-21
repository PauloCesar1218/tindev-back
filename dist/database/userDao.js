"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = __importDefault(require("./../index"));
var userDao = /** @class */ (function () {
    function userDao() {
    }
    userDao.prototype.getUsers = function (params, callback) {
        index_1.default.connection.query("\n            SELECT * FROM users\n        ", callback);
    };
    userDao.prototype.insertUser = function (params, callback) {
        console.log('params', params);
        var query = index_1.default.connection.query("\n            INSERT INTO users (github_username, age, email, password, name, bio, image_url) VALUES (?, ?, ?, ?, ?, ?, ?);\n        ", [params.github_username, params.age, params.email, params.password, params.name, params.bio, params.image_url], callback);
        console.log(query.sql);
    };
    userDao.prototype.likeUser = function (params, callback) {
        var query = index_1.default.connection.query("\n            INSERT INTO users_likes (id_user, id_user_liked, matched_at) VALUES (?, ?, NOW());\n        ", [params.id_user, params.id_user_liked], callback);
        console.log(query.sql);
    };
    return userDao;
}());
exports.default = new userDao();