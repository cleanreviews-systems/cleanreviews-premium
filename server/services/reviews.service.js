const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "../reviews.json");

// Add review
function saveReview(review) {
  let list = [];
  if (fs.existsSync(filePath)) {
    list = JSON.parse(fs.readFileSync(filePath));
  }
  list.push(review);
  fs.writeFileSync(filePath, JSON.stringify(list, null, 2));
  return review;
}

// Get all reviews
function getReviews() {
  if (!fs.existsSync(filePath)) return [];
  return JSON.parse(fs.readFileSync(filePath));
}

module.exports = { saveReview, getReviews };
