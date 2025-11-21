// server/services/business.service.js
const {
  listBusinesses,
  createBusiness,
} = require("../modules/business.module");

// Pour l’instant on n’a pas encore de JWT/token,
// donc on va simuler un user connecté avec userId = 1.

async function getBusinessesForUser(userId) {
  return listBusinesses(userId);
}

async function addBusinessForUser(userId, name) {
  if (!name || !name.trim()) {
    throw new Error("Business name is required");
  }

  return createBusiness(name.trim(), userId);
}

module.exports = {
  getBusinessesForUser,
  addBusinessForUser,
};
