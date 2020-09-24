'use strict';

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  restaurants: {type: Array , required: true }, // or just one restaurant: ObjectId
  published_at: { type: Number, default: Date.now() },
});

const UserModel = mongoose.model('Users', UserSchema);

module.exports = UserModel;