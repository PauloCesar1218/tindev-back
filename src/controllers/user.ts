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
        console.log('oi');
        await axios.get(`https://api.github.com/users/${UserData.github_username}`)
        .then(data => {
            UserData.image_url = data.data.avatar_url;
            UserData.name = data.data.name;
            UserData.bio = data.data.bio;
            userDao.likeUser(UserData, (err, results, fields) => {
                if (err) {
                    res.status(500).json(err)
                    return;
                }
                res.status(200).json(results);
            });
        });
    }
}

export default new user();
