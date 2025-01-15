const express = require('express');
const { addCompliance, getAllCompliances } = require('../controllers/complianceController');

const router = express.Router();

// Add a compliance record
router.post('/add', addCompliance);

// Get all compliance records
router.get('/all', getAllCompliances);

module.exports = router;
