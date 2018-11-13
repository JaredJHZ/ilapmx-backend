const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const {UserRoutes} = require('./Routes/users');
const {CommentsRoutes} = require('./Routes/comments');

const cors = require('cors')

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());



app.use('/user',UserRoutes);

app.use('/comments',CommentsRoutes);

app.listen(8080, async ()=> {
    console.log('Aplicacion corriendo en el puerto 8080');
});