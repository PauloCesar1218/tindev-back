"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("../src/index"));
class socketEvents {
    constructor() { }
    onConnection() {
        return index_1.default.io.on('connection', socket => {
            console.log(socket);
        });
    }
}
exports.default = new socketEvents();
