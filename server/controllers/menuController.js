'use strict';

const UserModel = require ('../models/User');

async function getAll(req, res) {
  try {
    const menu = await UserModel.find().sort({_id:-1});
    res.status(200);
    res.send(menu);
  } catch (err) {
    console.log(err); // eslint-disable-line no console
    res.sendStatus(500)
  }
};

async function postOne(req, res) {
  try {
    const  { restaurantMenu, email  } = req.body;
    const newMenu = await UserModel.updateOne( {email: email}, { restaurantMenu: restaurantMenu });
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