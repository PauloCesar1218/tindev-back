"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const userDao_1 = __importDefault(require("../database/userDao"));
class user {
    getUsers(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const UserData = req.body;
            yield userDao_1.default.getUsers(UserData, (err, results, fields) => {
                if (err) {
                    res.status(500).json(err);
                    return;
                }
                res.status(200).json(results);
            });
        });
    }
    insertUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const UserData = req.body;
            console.log(UserData);
            yield userDao_1.default.insertUser(UserData, (err, results, fields) => {
                if (err) {
                    res.status(500).json(err);
                    return;
                }
                res.status(200).json(results);
            });
        });
    }
}
exports.default = new user();
