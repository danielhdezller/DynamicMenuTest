'use strict';

const MenuModel = require ('../models/Menu');

async function getAll(req, res) {
  try {
    const menu = await MenuModel.find();
    res.status(200);
    res.send(menu);
  } catch (err) {
    console.log(err); // eslint-disable-line no console
    res.sendStatus(500)
  }
};

async function postOne(req, res) {
  try {
    const { restaurantName, date } = req.body;
    const newMenu = await MenuModel.create({ restaurantName, date });
    res.status(201);
    res.send(newMenu);
  } catch (err) {
    console.log(err); // eslint-disable-line no console
    res.sendStatus(500);
  }
};

module.exports = {
  getAll,
  postOne
}