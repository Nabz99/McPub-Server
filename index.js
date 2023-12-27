const express = require('express');
const multer = require('multer');
require('dotenv').config();
const mongoose = require('mongoose');
const seeder = require('./src/classes/Seeder');
const router = require('./src/routes');
const createError = require('http-errors');
const cors = require('cors');
const apiKeyMiddleware = require('./middleware/apiKey');

new seeder().wilaya();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

app.use(apiKeyMiddleware);

// app.use('/uploads', express.static('C:\\Users\\pc\\Desktop\\McPub\\Server\\uploads'));

// Set up multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    const timestamp = Date.now();
    const filename = timestamp + '-' + file.originalname;
    cb(null, filename);
  },
});

const upload = multer({ storage: storage });
app.get("/", (req, res) => {
  res.send("<h1>Server...</h1>");
});

app.use('/api', router);

mongoose.connect(process.env.DB_URL);

app.listen(process.env.PORT, () => {
  console.log('Server is listening', process.env.PORT);
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
