'use strict';

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  userName: { type: String, required: true },
  restaurantName: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  published_at: { type: Number, default: Date.now() },
});

const UserModel = mongoose.model('Users', UserSchema);

module.exports = UserModel;