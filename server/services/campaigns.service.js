const db = require('../modules/db');

function listCampaigns() {
  const stmt = db.prepare('SELECT * FROM campaigns ORDER BY created_at DESC');
  return stmt.all();
}

function createCampaign({ userId, businessId, name, type, channel, messageTemplate }) {
  const stmt = db.prepare(`
    INSERT INTO campaigns (user_id, business_id, name, type, channel, message_template)
    VALUES (?, ?, ?, ?, ?, ?)
  `);
  const info = stmt.run(userId, businessId || null, name, type, channel, messageTemplate);
  return {
    id: info.lastInsertRowid,
    user_id: userId,
    business_id: businessId || null,
    name,
    type,
    channel,
    message_template: messageTemplate,
  };
}

module.exports = {
  listCampaigns,
  createCampaign,
};
