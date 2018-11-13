const express = require('express');
const bcrypt = require('bcrypt');
const app = express();
const controllers = require('../controllers/functions');
let functions = new controllers();


app.post('/new', async (req , res) => {
    let body = req.body;
    let user = {
        user : body.user,
        email : body.email,
        password : bcrypt.hashSync(body.password,10)
    }
    let saveUser = await functions.saveUser(user);
    res.status(200).send(saveUser);
});

app.post('/login', async (req,res) => {
    let body = req.body;
    let email = body.email;
    let password = body.password;
    console.log(body);
    let getUser = await functions.login(email);
    if (getUser.length === 0) {
        return res.status(400).send({error:true});
    }
    let user = getUser[0];
    bcrypt.compare(password, user.password , (error, result) => {
        if (error){
            res.status(400).send({ok:false});
        } else {
            res.header('authorization', getUser.token)
                .status(200)
                .send({ok: result, user:user});
        }

    });
});

module.exports.UserRoutes = app;