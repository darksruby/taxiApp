const express = require('express');
const TravelController = require('./controllers/TravelController')

const routes = express.Router();

routes.get('/travels', TravelController.index); 
routes.post('/travels', TravelController.create);

module.exports = routes;