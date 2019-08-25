import { Request, Response } from 'express';
import { Query, QueryOptions, QueryFunction, MysqlError } from 'mysql';
import app from './../index';
import { UserModel } from '../models/userModel';
import userDao from '../database/userDao';

class user {
    
    public async getUsers(req: Request, res: Response) {
        const UserData = req.body;
        await userDao.getUsers(UserData, (err, results: UserModel, fields) => {
            if (err) {
                res.status(500).json(err)
                return;
            }
            res.status(200).json(results);
        });
    }

    public async insertUser(req: Request, res: Response) {
        const UserData = req.body;
        console.log(UserData);
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
        console.log(UserData);
        await userDao.likeUser(UserData, (err, results, fields) => {
            if (err) {
                res.status(500).json(err)
                return;
            }
            res.status(200).json(results);
        });
    }
}

export default new user();
