const express = require("express");
const router = express.Router();
const authService = require("../services/auth.service");

// ROUTE REGISTER
router.post("/register", async (req, res) => {
  try {
    const user = await authService.registerUser(
      req.body.email,
      req.body.password
    );
    res.json({ success: true, user });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// ROUTE LOGIN
router.post("/login", async (req, res) => {
  try {
    const user = await authService.loginUser(
      req.body.email,
      req.body.password
    );
    res.json({ success: true, user });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;

