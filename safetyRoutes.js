const express = require('express');
const {
    addSafetyReport,
    getAllSafetyReports,
} = require('../controllers/safetyController'); // Import controller functions

// Debug the imported functions
console.log('Imported functions from safetyController:', {
    addSafetyReport,
    getAllSafetyReports,
});

const router = express.Router();

// Define routes
router.post('/add', addSafetyReport); // POST route
router.get('/', getAllSafetyReports); // GET route

module.exports = router;
