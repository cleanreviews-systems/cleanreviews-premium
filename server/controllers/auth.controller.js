// server/controllers/auth.controller.js
const express = require("express");
const router = express.Router();
const { registerUser, loginUser } = require("../services/auth.service");

// POST /auth/signup
router.post("/signup", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res
        .status(400)
        .json({ error: "email and password are required" });
    }

    const user = await registerUser(email, password);
    return res.status(201).json({ user });
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
});

// POST /auth/login
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res
        .status(400)
        .json({ error: "email and password are required" });
    }

    const user = await loginUser(email, password);
    return res.json({ user });
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
});

module.exports = router;
