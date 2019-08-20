const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema
let Disease = new Schema({
  name: {
    type: String
  },
  symptoms: {
    type: String
  },
  causes: {
    type: String
  },
  preventions: {
    type: String
  }
},{
  collection: 'diseases'
})


module.exports = mongoose.model('Disease', Disease)
