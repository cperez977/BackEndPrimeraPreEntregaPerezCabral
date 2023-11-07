const productsModel = require('./models/productsModel');
const cartsModel = require('./models/cartsModel');

//controladores de productos

exports.list = (req, res) => {
    const limit = req.query.limit || 10;
    const products = productsModel.list(limit);
    res.json(products);
  };
  
  exports.show = (req, res) => {
    const pid = req.params.pid;
    const product = productsModel.show(pid);
    res.json(product);
  };
  
  exports.create = (req, res) => {
    const product = req.body;
    const newProduct = productsModel.create(product);
    res.json(newProduct);
  };
  
  exports.update = (req, res) => {
    const pid = req.params.pid;
    const product = req.body;
    const updatedProduct = productsModel.update(pid, product);
    res.json(updatedProduct);
  };
  
  exports.destroy = (req, res) => {
    const pid = req.params.pid;
    productsModel.destroy(pid);
    res.sendStatus(204);
  };
  
//controladores de carritos

  exports.create = (req, res) => {
    const cart = req.body;
    const newCart = cartsModel.create(cart);
    res.json(newCart);
  };
  
  exports.update = (req, res) => {
    const cid = req.params.cid;
    const cart = req.body;
    const updatedCart = cartsModel.update(cid, cart);
    res.json(updatedCart);
  };
  