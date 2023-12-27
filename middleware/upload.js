const multer = require('multer');

// Define the storage for uploaded files
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    // Set the destination where uploaded files will be stored
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    // Set the filename for the uploaded file
    const timestamp = Date.now();
    const filename = timestamp + '-' + file.originalname;
    cb(null, filename);
  },
});

// Create an instance of the Multer middleware with the storage configuration
const upload = multer({ storage: storage });

// Define the upload middleware function
const uploadMiddleware = (req, res, next) => {
  // Use the Multer middleware to process file uploads
  upload.single('photo')(req, res, (err) => {
    if (err instanceof multer.MulterError) {
      // Handle Multer errors
      return res.status(400).json({ message: 'File upload error', error: err });
    } else if (err) {
      // Handle other errors
      return res.status(500).json({ message: 'Internal server error', error: err });
    }
    
    // If there are no errors, move on to the next middleware or route handler
    next();
  });
};

module.exports = uploadMiddleware;