const express = require("express");
const router = express.Router();

// Exemple simple : à améliorer plus tard
router.get("/", (req, res) => {
    res.json({ message: "AI endpoint OK" });
});

module.exports = router;
// ai controller
