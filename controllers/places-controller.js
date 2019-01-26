//=====================Dependencies=====================//

//Express
const express = require('express');
const router = express.Router();

//Models
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

//Delete Route
router.delete('/:id', (req, res) => {
  Places.findOneAndDelete({_id:req.params.id}, (err, deletedPlace) => {
    res.redirect('/places')
  });
});

//Edit Route
router.get('/:id/edit', (req, res) => {
  Places.findById(req.params.id, (err, foundPlace) => {
    res.render('edit.ejs', {
      place: foundPlace
    });
  });
});

//Put Route For Edit Route
router.put('/:id', (req, res) => {
  Places.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, edited) => {
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

//=====================Exports=====================//
//Export Router
module.exports = router;
