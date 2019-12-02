import app from './../index';
import { Connection, queryCallback } from 'mysql';
import { UserModel } from '../models/userModel';

class userDao {
    public constructor() { }

    public getUsers(params: UserModel, callback: queryCallback) {
        app.connection.query(`
            SELECT * FROM users
        `, callback);
    }

    public getDevelopers(params: UserModel, callback: queryCallback) {
        app.connection.query(`
            SELECT * FROM developers LIMIT 20;
        `, callback);
    }

    public insertUser(params: UserModel, callback: queryCallback) {
        console.log('params', params);
        const query = app.connection.query(`
            INSERT INTO users (github_username, age, email, password, name, bio, image_url) VALUES (?, ?, ?, ?, ?, ?, ?);
        `, [params.github_username, params.age, params.email, params.password, params.name, params.bio, params.image_url], callback);
        console.log(query.sql);
    }

    public likeUser(params: any, callback: queryCallback) {
        const query = app.connection.query(`
            INSERT INTO users_likes (id_user, id_user_liked, matched_at) VALUES (?, ?, NOW());
        `, [params.id_user, params.id_user_liked], callback);
        console.log(query.sql);
    }

    public async matchUsers(params: any, callback: queryCallback) {
        const query = app.connection.query(`
            INSERT INTO profile_conversation (id_profile, id_user, created_at) VALUES (?, ?, NOW());
        `, [params.id_profile, params.id_user], callback);
        console.log(query.sql);
    }

    public searchMatches(params: any, callback: queryCallback) {
        const query = app.connection.query(`
            SELECT id_user FROM users_likes ul WHERE id_user IN (SELECT ul.id_user_liked FROM users_likes ul WHERE id_user = ?) AND id_user_liked = ?;
        `, [params.id_profile, params.id_profile], callback);
        console.log(query.sql);
    }

    public alreadyMatched(params: any, callback: queryCallback) {
        const query = app.connection.query(`
            SELECT * FROM profile_conversation WHERE id_profile = ? AND id_user = ? OR id_profile = ? AND id_user = ?;
        `, [params.id_profile, params.id_user, params.id_user, params.id_profile], callback);
        console.log(query.sql);
    }

    public addMessage(params: any, callback: queryCallback) {
        const query = app.connection.query(`
        INSERT INTO conversation_messages (id_conversation, id_profile, id_profile2, content, created_at) values (?, ?, ?, ?, NOW());
        `, [params.id_conversation, params.id_profile, params.id_profile2, params.content], callback);
        console.log(query.sql);
    }

    public getProfileConversations(params: any, callback: queryCallback) {
        const query = app.connection.query(`
            CALL sp_return_conversations(?, ?);
        `, [params.id_profile, params.id], callback);
        console.log(query.sql);
    }

    public IncredibleSelect(params: any, callback: queryCallback) {
        const query = app.connection.query(`
            SELECT * FROM profile_conversation pc 
            INNER JOIN (SELECT * FROM users_likes ul WHERE id_user IN (SELECT ul.id_user_liked FROM users_likes ul WHERE id_user = 2 AND id_user_liked <> 2) AND id_user_liked = 2) matches ON (matches.id_user = pc.id_profile AND matches.id_user_liked = pc.id_user OR matches.id_user = pc.id_user AND matches.id_user_liked = pc.id_profile)
            WHERE pc.id_profile = 2 AND pc.id_user = 1 OR pc.id_profile = 1 AND pc.id_user = 2; 
        `, [params.id_profile, params.id], callback);
        console.log(query.sql);
    }

    public getMatches(params: any, callback: queryCallback) {
        const query = app.connection.query(`
            SELECT pc.id
            ,dev.id
            ,dev.name
            ,dev.image_url
            ,EXISTS(SELECT * FROM conversation_messages cm WHERE cm.id_profile = ? AND cm.id_profile2 = dev.id OR cm.id_profile = dev.id AND cm.id_profile2 = ?) AS flag_has_conversation
            FROM profile_conversation pc 
            INNER JOIN developers dev ON (pc.id_profile <> ? AND dev.id = pc.id_profile OR pc.id_profile = ? AND dev.id = pc.id_user)
            WHERE pc.id_profile = ? OR pc.id_user = ?;
        `, [params.id_profile, params.id_profile, params.id_profile, params.id_profile, params.id_profile, params.id_profile], callback);
        console.log(query.sql);
    }


}

export default new userDao();
