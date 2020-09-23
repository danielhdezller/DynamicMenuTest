'use strict';

const mongoose = require('mongoose');
const conf = require('../config');

mongoose.connect(conf.dbURL, {
  useUnifiedTopology: true,
  useNewUrlParser: true
});

module.exports = mongoose;