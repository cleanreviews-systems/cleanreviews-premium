const router = require("express").Router();
const { registerUser, loginUser } = require("../services/auth.service");

router.post("/register", async (req, res) => {
    try {
        const user = await registerUser(req.body.email, req.body.password);
        res.json(user);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

router.post("/login", async (req, res) => {
    try {
        const user = await loginUser(req.body.email, req.body.password);
        res.json(user);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

module.exports = router;

