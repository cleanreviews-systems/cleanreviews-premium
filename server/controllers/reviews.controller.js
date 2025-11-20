const express = require("express");
const router = express.Router();
const reviewsModule = require("../modules/reviews.module");

router.get("/", (req, res) => {
  res.json({ message: "Reviews endpoint OK" });
});

module.exports = router;
