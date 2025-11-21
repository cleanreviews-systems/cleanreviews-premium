const sqlite3 = require('sqlite3').verbose();
const path = require('path');

// Fichier de base de données (à côté de server.js)
const dbPath = path.join(__dirname, 'cleanreviews.db');
const db = new sqlite3.Database(dbPath);

// Création des tables si elles n'existent pas
db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      email TEXT UNIQUE NOT NULL,
      password_hash TEXT NOT NULL,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `);
});

module.exports = db;
