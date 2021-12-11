const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  price: Number,
  category: String,
  image: String,
  description: String,
  location: String
});

const Product = mongoose.model('Product', productSchema);
// Product.insertMany([
//   {
//     price: 12,
//     category: 'Family',
//     image: 'http://res.cloudinary.com/stchi/image/upload/v1609603753/Main/Tide/en_US/Tide_HE_Liquid_Plus_Downy_1200x1200-1_clean.png',
//     description: 'Not used',
//     location: 'Bronx, New York'
//   },
//   {
//     price: 20,
//     category: 'Family',
//     image: 'https://www.verywellfamily.com/thmb/_xfKgL2YVEnEFUZXnL9xPnXqPHA=/fit-in/3000x3000/filters:no_upscale():max_bytes(150000):strip_icc()/ingenuityportableswing-a2c054bdeb67423abe1963eb360ccfd9.jpeg',
//     description: 'Still new',
//     location: 'South Houston, Manhattan'
//   },
//   {
//     price: 199.21,
//     category: 'Home Improvement Supply',
//     image: 'https://empire-s3-production.bobvila.com/articles/wp-content/uploads/2021/01/Best_Manual_Tile_Cutter_Options.png',
//     description: 'DeWALT DCKTS781D2M1 20V MAX Cordless Li-Ion 7 Tool Combo Kit w/Tough System',
//     location: 'South Amboy, New Jersey'
//   },
//   {
//     price: 500,
//     category: 'Pet Supplies',
//     image: 'https://m.media-amazon.com/images/I/91XTMuKCZgL._AC_SL1500_.jpg',
//     description: 'Pet Cradle',
//     location: 'Montclair, New Jersey'
//   },
// ], (err, results) => {
//   if (err) {
//     console.log('Error while inserting data into database');
//   } else {
//     console.log('Successfully inserted data into database');
//   }
// })

module.exports = Product;