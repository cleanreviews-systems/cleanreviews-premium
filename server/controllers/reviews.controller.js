const express = require('express');
const router = express.Router();
const { listReviewsByBusiness, addReview } = require('../services/reviews.service');

// GET /reviews/:businessId
router.get('/:businessId', (req, res) => {
  const businessId = parseInt(req.params.businessId, 10);
  if (Number.isNaN(businessId)) {
    return res.status(400).json({ error: 'Invalid business id' });
  }
  const reviews = listReviewsByBusiness(businessId);
  res.json(reviews);
});

// POST /reviews/:businessId
router.post('/:businessId', (req, res) => {
  try {
    const businessId = parseInt(req.params.businessId, 10);
    const { rating, comment, authorName } = req.body;

    if (Number.isNaN(businessId)) {
      return res.status(400).json({ error: 'Invalid business id' });
    }
    if (!rating) {
      return res.status(400).json({ error: 'Rating is required' });
    }

    const review = addReview(businessId, rating, comment || null, authorName || null);
    res.json(review);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
