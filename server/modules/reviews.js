const express = require("express");
const router = express.Router();
const { saveReview, getReviews } = require("../services/reviews.service");

// POST — add review
router.post("/", async (req, res) => {
  const data = req.body;
  const saved = await saveReview(data);
  res.json(saved);
});

// GET — list reviews
router.get("/", async (req, res) => {
  const reviews = await getReviews();
  res.json(reviews);
});

module.exports = router;
