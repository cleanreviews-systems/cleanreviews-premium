// Fake in-memory database
let businesses = [
  { id: 1, name: "My First Business", userId: 1 }
];

function listBusinesses() {
  return businesses;
}

function createBusiness(name, userId) {
  const newBusiness = {
    id: businesses.length + 1,
    name,
    userId
  };

  businesses.push(newBusiness);
  return newBusiness;
}

module.exports = {
  listBusinesses,
  createBusiness
};
