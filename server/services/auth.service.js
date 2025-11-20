const db = require('../modules/db');
const bcrypt = require('bcryptjs');

function getUserByEmail(email) {
  const stmt = db.prepare('SELECT * FROM users WHERE email = ?');
  return stmt.get(email);
}

function createUser(email, password) {
  const hash = bcrypt.hashSync(password, 10);
  const stmt = db.prepare('INSERT INTO users (email, password_hash) VALUES (?, ?)');
  const info = stmt.run(email, hash);
  return { id: info.lastInsertRowid, email };
}

async function registerUser(email, password) {
  const existing = getUserByEmail(email);
  if (existing) {
    throw new Error('User already exists');
  }
  return createUser(email, password);
}

async function loginUser(email, password) {
  const user = getUserByEmail(email);
  if (!user) {
    throw new Error('Invalid credentials');
  }
  const ok = bcrypt.compareSync(password, user.password_hash);
  if (!ok) {
    throw new Error('Invalid credentials');
  }
  return { id: user.id, email: user.email };
}

module.exports = {
  registerUser,
  loginUser,
  getUserByEmail,
};
