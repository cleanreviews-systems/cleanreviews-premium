// server/modules/business.module.js
const db = require("./db");

// Création de la table au démarrage si elle n’existe pas
db.run(
  `CREATE TABLE IF NOT EXISTS businesses (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    user_id INTEGER NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  )`
);

/**
 * Récupère toutes les businesses pour un user donné
 * (pour l’instant on utilisera un userId fixe côté controller).
 */
function listBusinesses(userId) {
  return new Promise((resolve, reject) => {
    db.all(
      "SELECT id, name, user_id as userId, created_at as createdAt FROM businesses WHERE user_id = ? ORDER BY id DESC",
      [userId],
      (err, rows) => {
        if (err) return reject(err);
        resolve(rows);
      }
    );
  });
}

/**
 * Crée une nouvelle business pour un user donné.
 */
function createBusiness(name, userId) {
  return new Promise((resolve, reject) => {
    db.run(
      "INSERT INTO businesses (name, user_id) VALUES (?, ?)",
      [name, userId],
      function (err) {
        if (err) return reject(err);
        resolve({
          id: this.lastID,
          name,
          userId,
        });
      }
    );
  });
}

module.exports = {
  listBusinesses,
  createBusiness,
};
