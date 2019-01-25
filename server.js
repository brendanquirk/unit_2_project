//=====================Dependencies=====================//
//Express
const express = require('express');
const app = express();
app.use(express.urlencoded({extended:true}));

//Mongoose
const mongoose = require('mongoose');

//Method Override
const methodOverride = require('method-override');
app.use(methodOverride('_method'));

//Require Other Files
const placesController = require('./controllers/places-controller.js');
app.use('/places', placesController);

//=====================Connections=====================//

app.listen(3000, () => {
  console.log('Listening...');
});

//MongoDB Connection
mongoose.connect('mongodb://localhost:27017/travel', {useNewUrlParser:true});
mongoose.connection.once('open', () => {
  console.log('connected to mongo');
});
