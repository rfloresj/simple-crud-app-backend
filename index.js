const express = require('express');
const res = require('express/lib/response');
const mongoose = require('mongoose');
const Product = require('./models/product.model.js');
const productRoutes = require('./routes/product.route.js');
const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routes
app.use('/api/products', productRoutes);

app.get('/', (req, res) => {
  res.send('Hello from Node API Server Updated');
});

mongoose
  .connect(
    'mongodb+srv://admin:A99jeYXgV1Ff43GY@backenddb.sqa352o.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB'
  )
  .then(() => {
    console.log('Connected to database!');
    app.listen(3000, () => {
      console.log('Server is running on PORT 3000');
    });
  })
  .catch(() => {
    console.log('Connection failed!');
  });
