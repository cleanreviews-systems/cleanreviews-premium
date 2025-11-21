const users = []; // Simulation d'une base de données

function registerUser(email, password) {
  const exists = users.find(u => u.email === email);
  if (exists) throw new Error("User already exists");

  const user = { email, password };
  users.push(user);

  return { message: "User registered", user };
}

function loginUser(email, password) {
  const user = users.find(u => u.email === email && u.password === password);
  if (!user) throw new Error("Invalid credentials");

  return { message: "Login successful", user };
}

module.exports = { registerUser, loginUser };
