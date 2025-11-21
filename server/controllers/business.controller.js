// server/controllers/business.controller.js
const express = require("express");
const router = express.Router();
const {
  getBusinessesForUser,
  addBusinessForUser,
} = require("../services/business.service");

// TEMP : on simule un utilisateur connecté avec id = 1
const FAKE_USER_ID = 1;

// GET /business -> liste des businesses du user
router.get("/", async (req, res) => {
  try {
    const businesses = await getBusinessesForUser(FAKE_USER_ID);
    res.json(businesses);
  } catch (err) {
    console.error("Error listing businesses:", err);
    res.status(500).json({ error: "Failed to list businesses" });
  }
});

// POST /business -> crée une business
router.post("/", async (req, res) => {
  try {
    const { name } = req.body;
    const business = await addBusinessForUser(FAKE_USER_ID, name);
    res.status(201).json(business);
  } catch (err) {
    console.error("Error creating business:", err);
    res.status(400).json({ error: err.message || "Failed to create business" });
  }
});

module.exports = router;
