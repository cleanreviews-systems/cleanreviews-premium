// server/services/auth.service.js
// Service d'auth simplifié en mémoire (sans base de données)

const users = []; // stockage en mémoire pour les tests

async function signup(email, password) {
  const exists = users.find((u) => u.email === email);
  if (exists) {
    throw new Error("User already exists");
  }

  const user = {
    id: users.length + 1,
    email,
    password, // en vrai on chiffrerait le mot de passe
  };

  users.push(user);
  return user;
}

async function login(email, password) {
  const user = users.find(
    (u) => u.email === email && u.password === password
  );

  if (!user) {
    throw new Error("Invalid credentials");
  }

  // token factice pour l’instant
  return {
    token: "dummy-token",
    userId: user.id,
  };
}

module.exports = { signup, login };

