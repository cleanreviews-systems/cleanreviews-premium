const db = require('../modules/db');

function listBusinesses() {
  const stmt = db.prepare('SELECT * FROM businesses ORDER BY created_at DESC');
  return stmt.all();
}

function createBusiness(name, userId) {
  const stmt = db.prepare('INSERT INTO businesses (name, user_id) VALUES (?, ?)');
  const info = stmt.run(name, userId);
  return { id: info.lastInsertRowid, name, user_id: userId };
}

module.exports = {
  listBusinesses,
  createBusiness,
};
