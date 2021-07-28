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

router.delete('/delete/:id', async (req, res) => {
  await User.findOneAndDelete({ _id: req.params.id });
  res.send({ success: true, msg: `User has been deleted.` });
});

router.put('/edit/:id', async (req, res) => {
  const { userName, age, email } = req.body;
  await User.findOneAndUpdate(
    { _id: req.params.id },
    {
      userName,
      age,
      email,
    }
  );
  res.send({ success: true, msg: `User ${userName} has been updated.` });
});

module.exports = router;
