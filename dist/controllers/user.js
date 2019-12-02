"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const userDao_1 = __importDefault(require("../database/userDao"));
const axios_1 = __importDefault(require("axios"));
class user {
    async getUsers(req, res) {
        const UserData = req.body;
        userDao_1.default.getUsers(UserData, (err, results, fields) => {
            if (err) {
                res.status(500).json(err);
                return;
            }
            res.status(200).json(results);
        });
    }
    async insertUser(req, res) {
        const UserData = req.body;
        await axios_1.default.get(`https://api.github.com/users/${UserData.github_username}`)
            .then(data => {
            UserData.image_url = data.data.avatar_url;
            UserData.name = data.data.name;
            UserData.bio = data.data.bio.toString();
        });
        await userDao_1.default.insertUser(UserData, (err, results, fields) => {
            if (err) {
                res.status(500).json(err);
                return;
            }
            res.status(200).json(results);
        });
    }
    async likeUser(req, res) {
        const UserData = req.body;
        userDao_1.default.likeUser(UserData, (err, results, fields) => {
            if (err) {
                res.status(500).json(err);
                return;
            }
            res.status(200).json(results);
        });
    }
    async createMatch(req, res) {
        const UserData = req.body;
        const userReturn = [];
        await userDao_1.default.searchMatches(UserData, (err, results, fields) => {
            if (err) {
                res.status(500).json(err);
                return;
            }
            results.map((x) => {
                const possibleMatch = {
                    id_profile: UserData.id_profile,
                    id_user: x.id_user
                };
                console.log(possibleMatch);
                userDao_1.default.alreadyMatched(possibleMatch, (err, results, fields) => {
                    if (err) {
                        res.status(500).json(err);
                        return;
                    }
                    console.log(results);
                    if (!results.length) {
                        const match = {
                            id_profile: UserData.id_profile,
                            id_user: x.id_user
                        };
                        console.log(match);
                        userDao_1.default.matchUsers(match, (err, results, fields) => {
                            if (err) {
                                res.status(500).json(err);
                                return;
                            }
                            userReturn.push(results);
                        });
                    }
                });
            });
            setTimeout(() => {
                res.status(200).json(userReturn);
            }, 2000);
        });
    }
    async sendMessage(req, res) {
        const UserData = req.body;
        await userDao_1.default.addMessage(UserData, (err, results, fields) => {
            if (err) {
                res.status(500).json(results);
            }
            res.status(200).json(results);
        });
    }
    async getDevelopers(req, res) {
        const UserData = req.body;
        await userDao_1.default.getDevelopers(UserData, (err, results, fields) => {
            if (err) {
                res.status(500).json(results);
            }
            res.status(200).json(results);
        });
    }
    async getProfileConversations(req, res) {
        const UserData = req.body, UserReturn = { matches: [], conversations: [], hasMessages: [] }, formatData = (data) => {
            delete data.hasMessages;
            return data;
        };
        await userDao_1.default.getMatches(UserData, (err, results, fields) => {
            if (err) {
                res.status(500).json(results);
            }
            UserReturn.matches = results.filter((x) => !x.flag_has_conversation);
            UserReturn.hasMessages = results.filter((x) => x.flag_has_conversation);
            UserReturn.hasMessages.map((x) => {
                x.id_profile = UserData.id_profile;
                userDao_1.default.getProfileConversations(x, (err, results, fields) => {
                    if (err) {
                        res.status(500).json(results);
                    }
                    console.log(results);
                    UserReturn.conversations.push(results[0][0]);
                });
            });
        });
        setTimeout(() => {
            res.status(200).json(formatData(UserReturn));
        }, 3000);
    }
}
exports.default = new user();
