const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const db = require("../modules/db"); // on créera ce fichier juste ensuite

const JWT_SECRET = process.env.JWT_SECRET || "supersecret";

// SIGNUP
async function signup({ email, password }) {
  const exists = await db.getUserByEmail(email);
  if (exists) throw new Error("User already exists");

  const hashed = await bcrypt.hash(password, 10);
  const user = await db.createUser(email, hashed);

  return { id: user.id, email: user.email };
}

// LOGIN
async function login({ email, password }) {
  const user = await db.getUserByEmail(email);
  if (!user) throw new Error("User not found");

  const match = await bcrypt.compare(password, user.password);
  if (!match) throw new Error("Invalid password");

  return jwt.sign({ id: user.id }, JWT_SECRET, { expiresIn: "7d" });
}

module.exports = { signup, login };

