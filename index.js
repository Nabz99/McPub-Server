const express = require('express');
const multer = require('multer');
require('dotenv').config();
const mongoose = require('mongoose');
const createError = require('http-errors');
const cors = require('cors');
const router = require('./src/routes');
const apiKeyMiddleware = require('./middleware/apiKey');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
  app.use(cors());
  app.use(cors());

app.use(cors());

app.use(apiKeyMiddleware);

// Routes
app.use('/api', router);

// Error Handling
app.use((req, res, next) => {
  next(createError(404));
});

app.use((err, req, res, next) => {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});

// Connect to MongoDB
mongoose.connect(process.env.DB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to the database');
    // Start the server after successfully connecting to the database
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}`);
    });
  })
  .catch((error) => {
    console.error('Error connecting to the database:', error);
    process.exit(1);
  });
