const express = require('express');
const productRouter = express.Router();
const productsController = require('../controllers/productsController');

productRouter.get('/detail/', productsController.detail);


module.exports = productRouter;