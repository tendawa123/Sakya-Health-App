const express = require('express');
const app = express();
const diseaseRoute = express.Router();
// Disease model
let Disease = require('../models/Disease');
// Add Disease
diseaseRoute.route('/create').post((req, res, next) => {
  Disease.create(req.body, (error, data) => {
if (error) {
  return next(error)
} else {
    res.json(data)
 }
})
});
// Get All Diseases
diseaseRoute.route('/').get((req, res) => {
  Disease.find((error, data) => {
if (error) {
  return next(error)
} else {
    res.json(data)
  }
})
})
diseaseRoute.route('/text').get((req, res) => {
  console.log("------------------hi-----------");
  res.json("hello tenzin......");
})
// Get single disease
diseaseRoute.route('/read/:id').get((req, res) => {
Disease.findById(req.params.id, (error, data) => {
if (error) {
  return next(error)
} else {
    res.json(data)
  }
})
})
// Update disease
diseaseRoute.route('/update/:id').put((req, res, next) => {
Disease.findByIdAndUpdate(req.params.id, {
                             $set: req.body
                           }, (error, data) => {
if (error) {
  return next(error);
  console.log(error)
} else {
    res.json(data)
    console.log('Data updated successfully')
  }
})
})
// Delete disease
   diseaseRoute.route('/delete/:id').delete((req, res, next) => {
Disease.findOneAndRemove(req.params.id, (error, data) => {
if (error) {
  return next(error);
} else {
res.status(200).json({
  msg: data
})
}
})
})

module.exports = diseaseRoute;
