'use strict';

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const MenuSchema = new Schema({
  restaurant: {
    starters: { type: Array, required: true },
    main: { type: Array, required: true },
    dessert: { type: Array, required: true },
    drinks: { type: Array, required: true },
    published_at: { type: Number, default: Date.now() },

  }
});

const MenuModel = mongoose.model('Menus', MenuSchema);

module.exports = MenuModel;