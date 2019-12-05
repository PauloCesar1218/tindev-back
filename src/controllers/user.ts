import { Request, Response } from 'express';
import { UserModel } from '../models/userModel';
import userDao from '../database/userDao';
import axios from 'axios';

class user {
    
    public async getUsers(req: Request, res: Response) {
        const UserData = req.body;
        userDao.getUsers(UserData, (err, results: UserModel[], fields) => {
            if (err) {
                res.status(500).json(err)
                return;
            }
         
            res.status(200).json(results);
        });
    }

    public async insertUser(req: Request, res: Response) {
        const UserData: UserModel = req.body;
        await axios.get(`https://api.github.com/users/${UserData.github_username}`)
        .then(data => {
            UserData.image_url = data.data.avatar_url;
            UserData.name = data.data.name;
            UserData.bio = data.data.bio;
        });
        await userDao.insertUser(UserData, (err, results, fields) => {
            if (err) {
                res.status(500).json(err)
                return;
            }
            res.status(200).json(results);
        });
    }

    public async likeUser(req: Request, res: Response) {
        const UserData = req.body;
        userDao.likeUser(UserData, (err, results, fields) => {
            if (err) {
                res.status(500).json(err)
                return;
            }
            res.status(200).json(results);
        });
    }

    public async getConversationMessages(req: Request, res: Response) {
        const UserData = req.body;
        let userReturn: { messages: any[] } = { messages: [] };
        userDao.getConversationMessages(UserData, (err, results, fields) => {
            if (err) {
                res.status(500).json(err)
                return;
            }
            userReturn.messages = results;
            res.status(200).json(results);
        });
    }

    public async createMatch(req: Request, res: Response) {
        const UserData = req.body;
        const userReturn: any[] = []
        await userDao.searchMatches(UserData, (err, results, fields) => {
            if (err) {
                res.status(500).json(err);
                return;
            }
            results.map((x: any) => {
                const possibleMatch = {
                    id_profile: UserData.id_profile,
                    id_user: x.id_user
                }
                console.log(possibleMatch);
                userDao.alreadyMatched(possibleMatch, (err, results, fields) => {
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
                        
                        userDao.matchUsers(match, (err, results, fields) => {
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

    public async sendMessage(req: Request, res: Response) {
        const UserData = req.body;
        await userDao.addMessage(UserData, (err, results, fields) => {
            if (err) {
                res.status(500).json(results);
            }
            res.status(200).json(results);
        });
    }

    public async getDevelopers(req: Request, res: Response) {
        const UserData = req.params.id;
        console.log(req.params);
        
        await userDao.getDevelopers(UserData, (err, results, fields) => {
            if (err) {
                res.status(500).json(results);
            }
            res.status(200).json(results.filter((x: any) => x.already_seen == 0));
        });
    }

    public async login(req: Request, res: Response) {
        const UserData = req.body;
        await userDao.login(UserData, (err, results, fields) => {
            if (err) {
                res.status(500).json(results);
            }
            if (!results.length) {
                res.status(404).json({msg: 'not found'});
                return;
            }
            res.status(200).json(results);
        });
    }

    public async getProfileConversations(req: Request, res: Response) {
        const   UserData = req.body,
                UserReturn: { matches: any[], conversations: any[], hasMessages: any[] } = { matches: [], conversations: [], hasMessages: [] },
                formatData = (data: any) => {
                    delete data.hasMessages;
                    return data;
                };

        await userDao.getMatches(UserData, (err, results, fields) => {
            if (err) {
                res.status(500).json(results);
            }

            UserReturn.matches = results.filter((x: any) => !x.flag_has_conversation);
            UserReturn.hasMessages = results.filter((x: any) => x.flag_has_conversation);

            UserReturn.hasMessages.map((x: any) => {
                x.id_profile = UserData.id_profile;
                userDao.getProfileConversations(x, (err, results, fields) => {
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

export default new user();
