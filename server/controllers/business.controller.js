const express = require("express");
const router = express.Router();

// Exemple simple : renvoie une liste vide au début
router.get("/", (req, res) => {
    res.json({ message: "Business endpoint OK", businesses: [] });
});

// Tu pourras ajouter des routes plus tard, exemple :
// router.post("/", (req, res) => {})

module.exports = router;
// business controller
