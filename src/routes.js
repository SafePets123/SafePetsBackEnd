const express = require('express');
const denuncianteController = require('./controllers/denuncianteController');
const authorization = require('./middleware/authorization');


const routes = express.Router();

routes.get('/user', denuncianteController.searchUsersAll)
routes.post('/user', denuncianteController.create);
routes.post('/userauth', denuncianteController.searchUsers);

module.exports = routes;

