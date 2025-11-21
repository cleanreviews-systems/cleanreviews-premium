// server/db.js
const sqlite3 = require("sqlite3").verbose();
const DBSOURCE = "cleanreviews.db";

let db = new sqlite3.Database(DBSOURCE, (err) => {
  if (err) {
    console.error("❌ Error opening database:", err.message);
    throw err;
  } else {
    console.log("✔ SQLite database connected.");

    db.run(
      `CREATE TABLE IF NOT EXISTS businesses (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        userId INTEGER
      )`,
      (err) => {
        if (err) {
          console.error("❌ Error creating businesses table:", err);
        } else {
          console.log("✔ Table 'businesses' ready.");
        }
      }
    );
  }
});

module.exports = db;
