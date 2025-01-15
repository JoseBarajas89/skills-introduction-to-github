const express = require('express');
const { addCostRecord, getAllCostRecords } = require('../controllers/costController'); // Import controller functions

// Debug imported functions
console.log('Imported functions from costController:', { addCostRecord, getAllCostRecords });

const router = express.Router();

// Define routes
router.post('/add', addCostRecord); // POST route to add a cost record
router.get('/', getAllCostRecords); // GET route to fetch all cost records

module.exports = router;
