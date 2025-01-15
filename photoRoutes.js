const express = require('express');
const { addPhotoRecord, getAllPhotoRecords } = require('../controllers/photoController'); // Import controller functions

// Debug imported functions
console.log('Imported functions from photoController:', { addPhotoRecord, getAllPhotoRecords });

const router = express.Router();

// Define routes
router.post('/add', addPhotoRecord); // POST route to add a photo record
router.get('/', getAllPhotoRecords); // GET route to fetch all photo records

module.exports = router;
