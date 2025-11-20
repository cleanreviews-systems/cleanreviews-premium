const express = require("express");
const cors = require("cors");
const app = express();

// Middlewares
app.use(express.json());
app.use(cors());

// IMPORT ROUTES
const authRoutes = require("./modules/auth.module");
const reviewRoutes = require("./modules/reviews.module");
const businessRoutes = require("./modules/business.module");
const campaignRoutes = require("./modules/campaigns.module");
const aiRoutes = require("./modules/ai.module");

// ROUTES PREFIX
app.use("/auth", require("./controllers/auth.controller"));
app.use("/reviews", require("./controllers/reviews.controller"));
app.use("/business", require("./controllers/business.controller"));
app.use("/campaigns", require("./controllers/campaigns.controller"));
app.use("/ai", require("./controllers/ai.controller"));

// Test route
app.get("/", (req, res) => {
  res.json({ message: "CleanReviews Premium API is running" });
});

// Start server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log("Server running on port " + PORT));
