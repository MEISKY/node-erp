const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const ShopSchema = new Schema({
  name: {
    type: String
  },
  type: {
    type: String
  },
  // describe: {
  //   type: String
  // },
  // income: {
  //   type: String,
  //   required: true
  // },
  // expend: {
  //   type: String,
  //   required: true
  // },
  // cash: {
  //   type: String,
  //   required: true
  // },
  remark: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Shop = mongoose.model('Shop', ShopSchema);
