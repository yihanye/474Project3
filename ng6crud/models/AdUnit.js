const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for AdUnits
let AdUnit = new Schema({
  email:{
    type: String
  },
  unit_course:{
    type: String
  },
  unit_name: {
    type: String
  },
  unit_price: {
    type: Number
  }
},{
    collection: 'adunits'
});

module.exports = mongoose.model('AdUnit', AdUnit);