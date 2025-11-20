const db = require('../modules/db');

function listReviewsByBusiness(businessId) {
  const stmt = db.prepare(
    'SELECT * FROM reviews WHERE business_id = ? ORDER BY created_at DESC'
  );
  return stmt.all(businessId);
}

function addReview(businessId, rating, comment, authorName) {
  const stmt = db.prepare(
    'INSERT INTO reviews (business_id, rating, comment, author_name) VALUES (?, ?, ?, ?)'
  );
  const info = stmt.run(businessId, rating, comment, authorName || null);
  return {
    id: info.lastInsertRowid,
    business_id: businessId,
    rating,
    comment,
    author_name: authorName || null,
  };
}

module.exports = {
  listReviewsByBusiness,
  addReview,
};
