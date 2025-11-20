const { getUserByEmail, createUser } = require("./db");

module.exports = {
  registerUser: async (email, password) => {
    const exists = getUserByEmail(email);
    if (exists) throw new Error("User already exists");

    return createUser(email, password);
  },

  loginUser: async (email, password) => {
    const user = getUserByEmail(email);
    if (!user || user.password !== password) throw new Error("Invalid credentials");
    return user;
  }
};



