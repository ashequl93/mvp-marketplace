const Product = require('../models/model.js');

const getProducts = (req, res) => {
  Product.find({}, (err, productList) => {
    if (err) {
      res.status(500).send('Internal Server Error');
    } else {
      res.status(200).send(productList);
    }
  })
}
module.exports = getProducts;