'use strict';

const userModel = require ('../models/User');

async function getAll(req, res) {
  try {
    const user = await userModel.find();
    res.status(200);
    res.send(user);
  } catch (err) {
    console.log(err); // eslint-disable-line no console
    res.sendStatus(500)
  }
};

async function postOne(req, res) {
  try {
    const { firstName, lastName, email, password, date, restaurants } = req.body;
    const newUser = await userModel.create({ firstName, lastName, email, password, date, restaurants });
    res.status(201);
    res.send(newUser);
  } catch (err) {
    console.log(err); // eslint-disable-line no console
    res.sendStatus(500);
  }
};

module.exports = {
  getAll,
  postOne
}