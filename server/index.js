const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');
const db = require('../database/index.js');
const getProducts = require('../database/controllers/index.js');

const PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(__dirname + '/../client/dist'));
app.use(express.static(__dirname + '/../public'));

app.get('/products', getProducts);
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '/../client/dist/index.html'), (err) => {
    if (err) {
      console.log('Error happened while sending the file')
    } else {
      console.log('Successfully send the index.html file');
    }
  })
})

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});