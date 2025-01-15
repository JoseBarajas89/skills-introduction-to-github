const express = require('express');
const { addRecord, getAllRecords } = require('../controllers/recordController'); // Import controller functions

// Debug imported functions
console.log('Imported functions from recordController:', { addRecord, getAllRecords });

const router = express.Router();

// Define routes
router.post('/add', addRecord); // POST route to add a record
router.get('/', getAllRecords); // GET route to fetch all records

module.exports = router;
