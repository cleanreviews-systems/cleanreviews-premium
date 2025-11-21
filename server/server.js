const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

// Route de test
app.get('/', (req, res) => {
  res.json({ message: 'CleanReviews Premium API is running' });
});

// Auth routes
app.use('/auth', require('./controllers/auth.controller'));

// TODO: plus tard on ajoutera:
// app.use('/business', require('./controllers/business.controller'));
// app.use('/reviews', require('./controllers/reviews.controller'));
// app.use('/campaigns', require('./controllers/campaigns.controller'));

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log('Server running on port', PORT);
});
