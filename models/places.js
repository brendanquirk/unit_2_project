//Require Mongoose
const mongoose = require('mongoose');

//Create Schema
const placesSchema = new mongoose.Schema({
  name: String,
  date: String,
  description: String,
  img: [String],
  daysStayed: Number
});

//Set Variable to Schema
const Place = mongoose.model('Place', placesSchema);

//Export Schema
module.exports = Place;
