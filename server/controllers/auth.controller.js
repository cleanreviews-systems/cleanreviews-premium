const express = require("express");
const router = express.Router();
const authService = require("../services/auth.service");

router.post("/register", async (req, res) => {
  try {
    const user = await authService.registerUser(req.body.email, req.body.password);
    res.json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.post("/login", async (req, res) => {
  try {
    const user = await authService.loginUser(req.body.email, req.body.password);
    res.json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
