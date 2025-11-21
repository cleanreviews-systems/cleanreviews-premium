// server/modules/db.js
const sqlite3 = require('sqlite3').verbose();
const path = require('path');

// On stocke la base dans un fichier à la racine de /server
const dbPath = path.join(__dirname, '..', 'cleanreviews.db');

const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error('Erreur de connexion à SQLite:', err.message);
  } else {
    console.log('Connecté à la base SQLite:', dbPath);
  }
});

// Création de la table users si elle n’existe pas encore
db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      email TEXT UNIQUE NOT NULL,
      password TEXT NOT NULL,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    );
  `);
});

module.exports = db;
