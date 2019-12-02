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
            SELECT * FROM users
        `, callback);
    }
    getDevelopers(params, callback) {
        index_1.default.connection.query(`
            SELECT * FROM developers LIMIT 20;
        `, callback);
    }
    insertUser(params, callback) {
        console.log('params', params);
        const query = index_1.default.connection.query(`
            INSERT INTO users (github_username, age, email, password, name, bio, image_url) VALUES (?, ?, ?, ?, ?, ?, ?);
        `, [params.github_username, params.age, params.email, params.password, params.name, params.bio, params.image_url], callback);
        console.log(query.sql);
    }
    likeUser(params, callback) {
        const query = index_1.default.connection.query(`
            INSERT INTO users_likes (id_user, id_user_liked, matched_at) VALUES (?, ?, NOW());
        `, [params.id_user, params.id_user_liked], callback);
        console.log(query.sql);
    }
    async matchUsers(params, callback) {
        const query = index_1.default.connection.query(`
            INSERT INTO profile_conversation (id_profile, id_user, created_at) VALUES (?, ?, NOW());
        `, [params.id_profile, params.id_user], callback);
        console.log(query.sql);
    }
    searchMatches(params, callback) {
        const query = index_1.default.connection.query(`
            SELECT id_user FROM users_likes ul WHERE id_user IN (SELECT ul.id_user_liked FROM users_likes ul WHERE id_user = ?) AND id_user_liked = ?;
        `, [params.id_profile, params.id_profile], callback);
        console.log(query.sql);
    }
    alreadyMatched(params, callback) {
        const query = index_1.default.connection.query(`
            SELECT * FROM profile_conversation WHERE id_profile = ? AND id_user = ? OR id_profile = ? AND id_user = ?;
        `, [params.id_profile, params.id_user, params.id_user, params.id_profile], callback);
        console.log(query.sql);
    }
    addMessage(params, callback) {
        const query = index_1.default.connection.query(`
        INSERT INTO conversation_messages (id_conversation, id_profile, id_profile2, content, created_at) values (?, ?, ?, ?, NOW());
        `, [params.id_conversation, params.id_profile, params.id_profile2, params.content], callback);
        console.log(query.sql);
    }
    getProfileConversations(params, callback) {
        const query = index_1.default.connection.query(`
            CALL sp_return_conversations(?, ?);
        `, [params.id_profile, params.id], callback);
        console.log(query.sql);
    }
    IncredibleSelect(params, callback) {
        const query = index_1.default.connection.query(`
            SELECT * FROM profile_conversation pc 
            INNER JOIN (SELECT * FROM users_likes ul WHERE id_user IN (SELECT ul.id_user_liked FROM users_likes ul WHERE id_user = 2 AND id_user_liked <> 2) AND id_user_liked = 2) matches ON (matches.id_user = pc.id_profile AND matches.id_user_liked = pc.id_user OR matches.id_user = pc.id_user AND matches.id_user_liked = pc.id_profile)
            WHERE pc.id_profile = 2 AND pc.id_user = 1 OR pc.id_profile = 1 AND pc.id_user = 2; 
        `, [params.id_profile, params.id], callback);
        console.log(query.sql);
    }
    getMatches(params, callback) {
        const query = index_1.default.connection.query(`
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
exports.default = new userDao();
