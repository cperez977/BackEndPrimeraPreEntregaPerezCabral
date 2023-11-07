const express = require('express');
const router = express.Router();

const productsController = require('./controllers/productsController');
const cartsController = require('./controllers/cartsController');

//rutas de productos

router.get('api/products', productsController.list);
router.get('api/products/:pid', productsController.show);
router.post('api/products', productsController.create);
router.put('api/products/:pid', productsController.update);
router.delete('api/products/:pid', productsController.destroy);

//rutas de carritos

router.post('/carts', cartsController.create);
router.put('/carts/:cid', cartsController.update);

module.exports = router;
