let users = [];

function registerUser(email, password) {
  const exists = users.find(u => u.email === email);
  if (exists) throw new Error("User already exists");

  const newUser = { email, password };
  users.push(newUser);
  return newUser;
}

function loginUser(email, password) {
  const user = users.find(u => u.email === email);
  if (!user || user.password !== password)
    throw new Error("Invalid credentials");

  return user;
}

module.exports = { registerUser, loginUser };
