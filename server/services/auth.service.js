// server/services/auth.service.js
const bcrypt = require('bcryptjs');
const db = require('../modules/db');

// helper: récupérer un user par email
function getUserByEmail(email) {
  return new Promise((resolve, reject) => {
    db.get(
      'SELECT id, email, password FROM users WHERE email = ?',
      [email],
      (err, row) => {
        if (err) return reject(err);
        resolve(row || null);
      }
    );
  });
}

// helper: créer un user
function createUser(email, passwordHash) {
  return new Promise((resolve, reject) => {
    db.run(
      'INSERT INTO users (email, password) VALUES (?, ?)',
      [email, passwordHash],
      function (err) {
        if (err) return reject(err);
        resolve({ id: this.lastID, email });
      }
    );
  });
}

// inscription
async function registerUser(email, password) {
  // vérifier si l’email existe déjà
  const existing = await getUserByEmail(email);
  if (existing) {
    throw new Error('User already exists');
  }

  // hasher le mot de passe
  const hash = await bcrypt.hash(password, 10);

  // créer l’utilisateur
  const user = await createUser(email, hash);
  return user;
}

// login
async function loginUser(email, password) {
  const user = await getUserByEmail(email);
  if (!user) {
    throw new Error('Invalid credentials');
  }

  const ok = await bcrypt.compare(password, user.password);
  if (!ok) {
    throw new Error('Invalid credentials');
  }

  // Pour l’instant on retourne juste un “token” simple
  // plus tard on mettra un vrai JWT
  const fakeToken = `token-${user.id}-${Date.now()}`;
  return { token: fakeToken, userId: user.id, email: user.email };
}

module.exports = {
  registerUser,
  loginUser,
};
