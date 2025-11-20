// server/controllers/business.controller.js

const express = require("express");
const router = express.Router();
const { listBusinesses, createBusiness } = require("../services/business.service");

// GET /business
router.get("/", (req, res) => {
    res.json(listBusinesses());
});

// POST /business
router.post("/", (req, res) => {
    try {
        const { name, userId } = req.body;
        if (!name) {
            return res.status(400).json({ error: "Business name is required" });
        }
        const business = createBusiness(name, userId || 1);
        res.json(business);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

module.exports = router;
