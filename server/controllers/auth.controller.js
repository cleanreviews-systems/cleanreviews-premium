const express = require("express");
const router = express.Router();

const { registerUser, loginUser } = require("../services/auth.service");

router.post("/signup", (req, res) => {
  try {
    const { email, password } = req.body;
    const result = registerUser(email, password);
    res.json(result);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.post("/login", (req, res) => {
  try {
    const { email, password } = req.body;
    const result = loginUser(email, password);
    res.json(result);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
