const express = require('express');
const router = express.Router();

const Places = require('../models/places.js')


//=====================Routes=====================//

//Index Route
router.get('/', (req, res) => {
  Places.find({}, (err, allPlaces) => {
    res.render('index.ejs', {
      places: allPlaces
    })
  });
});

//New Route
router.get('/new', (req, res) => {
  res.render('new.ejs')
});

//Create Route For New Route
router.post('/', (req, res) => {
  Places.create(req.body, (err, createdPlace) => {
    res.redirect('/places')
  });
});

//Show Route
router.get('/:id', (req, res) => {
  Places.findById(req.params.id, (err, foundPlace) => {
    res.render('show.ejs', {
      place: foundPlace
    })
  });
});

module.exports = router;
