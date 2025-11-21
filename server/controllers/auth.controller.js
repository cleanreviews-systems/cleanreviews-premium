const express = require("express");
const router = express.Router();
const { registerUser, loginUser } = require("../services/auth.service");

// Inscription
router.post("/signup", async (req, res) => {
  try {
    const { email, password } = req.body;
    const result = await registerUser(email, password);
    res.json(result);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Connexion
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const result = await loginUser(email, password);
    res.json(result);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
