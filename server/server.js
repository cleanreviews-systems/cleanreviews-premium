const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());

// IMPORT CORRECT DES CONTROLLERS
app.use("/auth", require("./controllers/auth.controller"));
app.use("/reviews", require("./controllers/reviews.controller"));
app.use("/business", require("./controllers/business.controller"));
app.use("/campaigns", require("./controllers/campaigns.controller"));
app.use("/ai", require("./controllers/ai.controller"));

app.get("/", (req, res) => {
  res.json({ message: "CleanReviews Premium API is running" });
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log("Server running on port " + PORT));
