// server/controllers/auth.controller.js
const express = require('express');
const router = express.Router();

const { registerUser, loginUser } = require('../services/auth.service');

// POST /auth/signup
router.post('/signup', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await registerUser(email, password);
    res.json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// POST /auth/login
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const result = await loginUser(email, password);
    res.json(result);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
