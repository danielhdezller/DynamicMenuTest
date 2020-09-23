'use strict';

const express = require ('express');
const cors = require('cors');
const router = require('./routes/routes');
const mongoose = require('./models/');

const app = express();
const port = 3001;
const host = 'localhost';

const corsConfig = {
  origin: 'http://localhost:3000',
  credentials: true,
};



app.use(cors(corsConfig));
app.use(express.json());
app.use(router);

const database = mongoose.connection;
database.on('error', console.error.bind(console, 'connection error'));
database.once('open', function () {
  console.log('Database connected!!!'); // eslint-disable-line no console
  app.listen(port, () => {
    console.log(`Listening on http://${host}:${port}`) // eslint-disable-line no console
  })
});