const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());

// IMPORT MODULE ROUTES (pas controllers)
app.use("/auth", require("./modules/auth.module"));
app.use("/reviews", require("./modules/reviews.module"));
app.use("/business", require("./modules/business.module"));
app.use("/campaigns", require("./modules/campaigns.module"));
app.use("/ai", require("./modules/ai.module"));

app.get("/", (req, res) => {
  res.json({ message: "CleanReviews Premium API is running" });
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log("Server running on port " + PORT));
