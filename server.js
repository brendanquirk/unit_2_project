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

//CSS
app.use(express.static('public'));

//Heroku
const PORT = process.env.PORT || 3000;

//Database
const MONGODB_URI = process.env.MongoDB_URI || 'mongodb://localhost/' + 'travel'
//=====================Connections=====================//

app.listen(PORT, () => {
  console.log('Listening on port', PORT);
});

//MongoDB Connection
mongoose.connect(MONGODB_URI, {useNewUrlParser:true});
mongoose.connection.once('open', () => {
  console.log('connected to mongo');
});
