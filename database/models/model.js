const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  price: Number,
  category: String,
  image: String,
  description: String,
  location: String
});

const Product = mongoose.model('Product', productSchema);
Product.insertMany([
  {
    price: 12000,
    category: 'Vehicles',
    image: 'http://img.scgpix.com/listimg/img1_0717/03/img_jutIisBGKHvu2Zt_r.jpg',
    description: 'Sea Hunt Gamefish 25 Boats for sale',
    location: 'Fort Lee, New Jersey'
  },

], (err, results) => {
  if (err) {
    console.log('Error while inserting data into database');
  } else {
    console.log('Successfully inserted data into database');
  }
})

module.exports = Product;