const express = require('express');
const router = express.Router();
const { listCampaigns, createCampaign } = require('../services/campaigns.service');

// GET /campaigns
router.get('/', (req, res) => {
  const campaigns = listCampaigns();
  res.json(campaigns);
});

// POST /campaigns
router.post('/', (req, res) => {
  try {
    const { userId, businessId, name, type, channel, messageTemplate } = req.body;

    if (!name || !type || !channel || !messageTemplate) {
      return res.status(400).json({ error: 'Missing fields' });
    }

    const campaign = createCampaign({
      userId: userId || 1, // simplifié
      businessId: businessId || null,
      name,
      type,
      channel,
      messageTemplate,
    });

    res.json(campaign);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
