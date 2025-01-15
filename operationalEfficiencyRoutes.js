const express = require('express');
const {
    addOperationalEfficiencyRecord,
    getAllOperationalEfficiencyRecords,
} = require('../controllers/operationalEfficiencyController'); // Import controller functions

// Debug imported functions
console.log('Imported functions from operationalEfficiencyController:', {
    addOperationalEfficiencyRecord,
    getAllOperationalEfficiencyRecords,
});

const router = express.Router();

// Define routes
router.post('/add', addOperationalEfficiencyRecord); // POST route to add a record
router.get('/', getAllOperationalEfficiencyRecords); // GET route to fetch all records

module.exports = router;
