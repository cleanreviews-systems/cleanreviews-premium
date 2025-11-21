const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");

// Base de données simple en mémoire
let users = [];

// POST /auth/signup
router.post("/signup", async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password)
      return res.status(400).json({ error: "Missing fields" });

    const hashed = await bcrypt.hash(password, 10);
    users.push({ email, password: hashed });

    res.json({ message: "User registered", email });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST /auth/login
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = users.find(u => u.email === email);
    if (!user) return res.status(400).json({ error: "User not found" });

    const ok = await bcrypt.compare(password, user.password);
    if (!ok) return res.status(400).json({ error: "Bad password" });

    res.json({ message: "Login OK", email });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
