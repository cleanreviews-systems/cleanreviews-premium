const express = require("express");
const router = express.Router();

// Test route pour valider le controller
router.get("/", (req, res) => {
    res.json({ message: "Campaigns endpoint OK", campaigns: [] });
});

module.exports = router;

