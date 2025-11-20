const express = require("express");
const router = express.Router();

const { signup, login } = require("../services/auth.service");

// POST /auth/signup
router.post("/signup", async (req, res) => {
  try {
    const user = await signup(req.body);
    res.json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// POST /auth/login
router.post("/login", async (req, res) => {
  try {
    const token = await login(req.body);
    res.json({ token });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;

