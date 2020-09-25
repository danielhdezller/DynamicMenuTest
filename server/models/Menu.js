'use strict';

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const MenuSchema = new Schema({
  // restaurantName: { type: String, required: true },
  restaurant: { type: Array, required: true },
  // price: { type: String, required: true },
  
  published_at: { type: Number, default: Date.now() },
});

const MenuModel = mongoose.model('Menus', MenuSchema);

module.exports = MenuModel;