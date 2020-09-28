'use strict';

const User = require ('../models/User');
const bcrypt = require ('bcrypt');

async function create(req, res) {
  const { email, password } =req.body;
  const user = await User.findOne({ email: email });
  if (user)
    return res  
      .status(409)
      .send({ error:'409', message: 'User already exists' });
  const hash = await bcrypt.hash(password, 10);
  const newUser = new User({
    ...req.body,
    password: hash,
  });
  try {
    const user = await newUser.save();
    req.session.uid = user._id;
    res.status(201);
    res.send(newUser);
  } catch (error) {
    res.sendStatus(400);
    res.send({ error, message: 'Could not create user' });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email: email });
    const validatedPass = await bcrypt.compare(password, user.password);
    if(!validatedPass) throw new Error();
    req.session.uid = user._id;
    res.status(200).send(user);
  } catch (error) {
    res
    .status(401)
    .send({ error: '401', message: 'Username or password is incorrect' });
  }
}




async function getUser (req, res) {
  try {
    const user = await User.find();
    res.status(200);
    res.send(user);
  } catch (error) {
    console.log(error); // eslint-disable-line no console
    res.sendStatus(500)
  }
};


module.exports = {
  create,
  login,
  getUser
}