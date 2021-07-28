const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.post('/addNewUser', async (req, res) => {
  const newUser = new User(req.body);
  try {
    const result = await newUser.save();
    res.json(result);
  } catch (err) {
    res.json({ internalError: err });
  }
});

router.get('/allUsers', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.json({ internalError: err });
  }
});

module.exports = router;
