const dbConfig = require('../db/db');
const queries = require('../db/queries');
const jwt = require('jsonwebtoken');

module.exports = class Controller {
    async saveUser(user) {
        let con = await dbConfig();
        try {
            
            let createUser = await con.query(queries.create_user,[user.user, user.email, user.password]);
            user.id = createUser.id;
            return user;

        }catch (ex) {

            throw ex;

          } finally {

            await con.release();
            await con.destroy();

          }
    }

    async login(email) {
        let con = await dbConfig();
        try {
            let getUser = await con.query(queries.get_user, [email]);
            let user = JSON.parse(JSON.stringify(getUser));
            if (getUser.length === 0){
                return getUser;
            }
            let token = await this.createToken(user);
            user.token = token;
            return user
        }
        catch(ex) {
            throw ex;
        } finally {
            await con.release();
            await con.destroy();
        }
    }

    async createComment(comment) {
        let con = await dbConfig();
        try {
            let createComment = await con.query(queries.create_comment,[comment.user, comment.comment]);
            comment.id = createComment.id;
            return comment;
        } catch(ex) {
            throw ex;
        } finally {
            await con.release;
            await con.destroy;
        }
    }

    async getComments() {
        let con = await dbConfig();
        try {
            let comments = await con.query(queries.get_comments);
            return comments;
        }catch(ex) {
            throw ex;
        } finally {
            await con.release();
            await con.destroy();
        }
    }

    async findUserByToken(id) {
        let con = await dbConfig();
        try{
            let user = await con.query(queries.findByToken,id);
            return user;
        }catch(ex) {
            throw ex;
        } finally {
            await con.release();
            await con.destroy();
        }
    }

    async createToken(user) {
        let gUser = user[0];
        let token = jwt.sign(gUser, 'itsasecret');
        let con = await dbConfig();
        try {
            let tk = await con.query(queries.create_token,[gUser.id, token]);
            return token;
        }catch(ex) {
            throw ex;
        } finally{
            await con.release();
            await con.destroy();
        }
    }
}