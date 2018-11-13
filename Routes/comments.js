const express = require('express');
const app = express();
const controllers = require('../controllers/functions');
let functions = new controllers();

app.post('/create', async (req,res) => {
    let body = req.body;
    console.log(body);
    let comment = {
        user:body.user,
        comment:body.comment
    };
    let saveComment = await functions.createComment(comment);
    res.status(200).send(saveComment);
});

app.get('/get', async (req,res) => {
   let comments = await functions.getComments();
   res.status(200).send(comments); 
});

module.exports.CommentsRoutes = app;