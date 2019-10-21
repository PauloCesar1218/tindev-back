"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var routes_1 = __importDefault(require("./routes"));
var connectionFactory_1 = __importDefault(require("./database/connectionFactory"));
var body_parser_1 = __importDefault(require("body-parser"));
var App = /** @class */ (function () {
    function App() {
        var _this = this;
        this.port = process.env.PORT || 5000;
        this.express = express_1.default();
        this.express.listen(this.port, function () { return console.log('Server listening on port', _this.port); });
        this.middlewares();
        this.connection = connectionFactory_1.default.connectDatabase();
        // this.connection = this.databaseConnection();
        this.routes();
    }
    App.prototype.middlewares = function () {
        // parse application/x-www-form-urlencoded
        this.express.use(body_parser_1.default.urlencoded({ extended: false }));
        // parse application/json
        this.express.use(body_parser_1.default.json());
        // Allow Cross-Origin Resource Sharing
        this.express.use(cors_1.default());
    };
    App.prototype.routes = function () {
        this.express.use(routes_1.default);
    };
    return App;
}());
exports.default = new App();
