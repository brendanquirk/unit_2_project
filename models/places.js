const mongoose = require('mongoose');

//Create Schema

const placesSchema = new mongoose.Schema({
  name: String,
  date: String,
  description: String,
  img: String,
  daysStayed: Number,
  lovedIt: Boolean
});

const Place = mongoose.model('Place', placesSchema);

module.exports = Place;
