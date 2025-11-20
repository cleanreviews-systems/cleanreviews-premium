// server/services/business.service.js

// Stockage simple en mémoire (à remplacer plus tard par une base SQL)
let businesses = [];

// Retourne toutes les entreprises
function listBusinesses() {
    return businesses;
}

// Crée une nouvelle entreprise
function createBusiness(name, userId) {
    const business = { id: businesses.length + 1, name, userId };
    businesses.push(business);
    return business;
}

module.exports = {
    listBusinesses,
    createBusiness
};
