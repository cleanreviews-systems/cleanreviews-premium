const express = require("express");
const router = express.Router();
const { registerUser, loginUser } = require("../services/auth.service");

router.post("/signup", (req, res) => {
  try {
    const { email, password } = req.body;
    const user = registerUser(email, password);
    res.json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.post("/login", (req, res) => {
  try {
    const { email, password } = req.body;
    const user = loginUser(email, password);
    res.json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
