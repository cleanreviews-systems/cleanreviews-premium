// server/services/auth.service.js
const bcrypt = require("bcryptjs");

// Petit "pseudo" stockage en mémoire pour tester l'API.
// (On branchera ça sur la vraie base plus tard.)
const users = new Map(); // email -> { email, passwordHash }

async function registerUser(email, password) {
  const existing = users.get(email);
  if (existing) {
    throw new Error("User already exists");
  }

  const passwordHash = await bcrypt.hash(password, 10);
  const user = { email, passwordHash };
  users.set(email, user);

  // On ne renvoie jamais le hash au client
  return { email };
}

async function loginUser(email, password) {
  const user = users.get(email);
  if (!user) {
    throw new Error("Invalid credentials");
  }

  const ok = await bcrypt.compare(password, user.passwordHash);
  if (!ok) {
    throw new Error("Invalid credentials");
  }

  return { email };
}

module.exports = {
  registerUser,
  loginUser,
};
