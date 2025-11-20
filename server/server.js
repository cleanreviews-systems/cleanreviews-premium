const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
app.use(express.json());
app.use(cors());

// ROUTES
const reviewRoutes = require("./modules/reviews");
app.use("/reviews", reviewRoutes);

// AUTH
const authRoutes = require("./modules/auth.module");
app.use("/auth", authRoutes);

// Test route
app.get("/", (req, res) => {
  res.json({ message: "CleanReviews Premium API is running" });
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log("Server running on port " + PORT));
