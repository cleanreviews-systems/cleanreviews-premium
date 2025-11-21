const db = require('../db');
const bcrypt = require('bcryptjs');

// Récupérer un user par email
function getUserByEmail(email) {
  return new Promise((resolve, reject) => {
    db.get('SELECT * FROM users WHERE email = ?', [email], (err, row) => {
      if (err) return reject(err);
      resolve(row || null);
    });
  });
}

// Créer un user
function createUser(email, password) {
  return new Promise((resolve, reject) => {
    bcrypt.hash(password, 10, (err, hash) => {
      if (err) return reject(err);

      const sql = 'INSERT INTO users (email, password_hash) VALUES (?, ?)';
      db.run(sql, [email, hash], function (err) {
        if (err) {
          if (err.code === 'SQLITE_CONSTRAINT') {
            return reject(new Error('User already exists'));
          }
          return reject(err);
        }
        resolve({ id: this.lastID, email });
      });
    });
  });
}

// Signup logique
async function registerUser(email, password) {
  const existing = await getUserByEmail(email);
  if (existing) {
    throw new Error('User already exists');
  }
  return createUser(email, password);
}

// Login logique
async function loginUser(email, password) {
  const user = await getUserByEmail(email);
  if (!user) throw new Error('Invalid credentials');

  const ok = await bcrypt.compare(password, user.password_hash);
  if (!ok) throw new Error('Invalid credentials');

  // Plus tard : on renverra aussi un JWT
  return { id: user.id, email: user.email };
}

module.exports = {
  registerUser,
  loginUser,
};

