const express = require('express');
const multer = require('multer');
require('dotenv').config();
const mongoose = require('mongoose');
const router = require('./src/routes');
const createError = require('http-errors');
const cors = require('cors');
// const apiKeyMiddleware = require('./middleware/apiKey');

const app = express();
try {
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  app.use(cors());

  // app.use(apiKeyMiddleware);

  // app.use('/uploads', express.static('C:\\Users\\pc\\Desktop\\McPub\\Server\\uploads'));

  // Set up multer for file uploads
  // const storage = multer.diskStorage({
  //   destination: (req, file, cb) => {
  //     cb(null, 'uploads/');
  //   },
  //   filename: (req, file, cb) => {
  //     const timestamp = Date.now();
  //     const filename = timestamp + '-' + file.originalname;
  //     cb(null, filename);
  //   },
  // });

  // const upload = multer({ storage: storage });

  app.get("/", (req, res) => {
    res.send("<h1>Server...</h1>");
  });

  app.use('/api', router);

  // Error Handling
  app.use((req, res, next) => {
    next(createError(404));
  });

  app.use(function (err, req, res, next) {
    console.error(err.message);
    if (!err.statusCode) err.statusCode = 500;
    res.status(err.statusCode).send(err.message);
  });

  mongoose.connect(process.env.DB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
      console.log('Connected to the database');
    })
    .catch((error) => {
      console.error('Error connecting to the database:', error);
      process.exit(1);
    });


  const port = process.env.PORT || 5000;

  app.listen(port, () => {
    console.log('Server is listening on port', port);
  });

  // Error Handling
  app.use((req, res, next) => {
    next(createError(404));
  });

  app.use(function (err, req, res, next) {
    console.error(err.message);
    if (!err.statusCode) err.statusCode = 500;
    res.status(err.statusCode).send(err.message);
  });
} catch (error) {
  console.error('Error:', error);
  res.status(500).send('Internal Server Error');
  // You can also log to a file or external service for better debugging
}
