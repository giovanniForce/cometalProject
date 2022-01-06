const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const stuffRoutes = require('./routes/stuffroute');
const userRoutes = require('./routes/userRoute');
const equiRoutes = require('./routes/equiroute');



mongoose.connect('mongodb+srv://gioforce:bou2chou@cluster0.la9gm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

  const app = express();


app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

  app.use(bodyParser.json());


  app.use('/api/stuff', stuffRoutes);
  app.use('/api/equi', equiRoutes);
  app.use('/api/auth', userRoutes);



  
module.exports = app;