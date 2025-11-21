const bcrypt = require("bcryptjs");
const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("./db.sqlite");

// Création automatique de la table utilisateur
db.run(`CREATE TABLE IF NOT EXISTS users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  email TEXT UNIQUE,
  password TEXT
)`);

// Inscription
function registerUser(email, password) {
  return new Promise((resolve, reject) => {
    const hash = bcrypt.hashSync(password, 10);

    db.run(
      `INSERT INTO users (email, password) VALUES (?, ?)`,
      [email, hash],
      function (err) {
        if (err) return reject(new Error("Email already exists"));
        resolve({ id: this.lastID, email });
      }
    );
  });
}

// Connexion
function loginUser(email, password) {
  return new Promise((resolve, reject) => {
    db.get(
      `SELECT * FROM users WHERE email = ?`,
      [email],
      (err, user) => {
        if (err || !user) return reject(new Error("User not found"));

        const valid = bcrypt.compareSync(password, user.password);
        if (!valid) return reject(new Error("Invalid password"));

        resolve({ id: user.id, email: user.email });
      }
    );
  });
}

module.exports = { registerUser, loginUser };
