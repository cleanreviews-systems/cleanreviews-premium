const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());

// ROUTES
app.use("/auth", require("./controllers/auth.controller"));
app.use("/business", require("./controllers/business.controller"));  // <-- OBLIGATOIRE

// Ping de test
app.get("/", (req, res) => {
  res.json({ message: "CleanReviews Premium API is running" });
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log("Server running on port " + PORT));
