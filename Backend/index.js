const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const app = express();
const authRoutes = require('./routes/auth');
app.use(express.json());

app.use(cors()); // Enable CORS for all routes
// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/charitfix')
  .then(() => console.log('MongoDB is connected'))
  .catch(err => console.log(err));

  app.use('/api/auth', authRoutes);

app.listen(5000, () => console.log('Server running on port 5000'));
