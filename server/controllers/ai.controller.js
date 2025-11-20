const express = require('express');
const router = express.Router();
const { generateReply } = require('../services/ai.service');

// POST /ai/reply
router.post('/reply', async (req, res) => {
  try {
    const { reviewText } = req.body;
    if (!reviewText) {
      return res.status(400).json({ error: 'reviewText is required' });
    }
    const reply = await generateReply(reviewText);
    res.json({ reply });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
