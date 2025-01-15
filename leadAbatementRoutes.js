const express = require('express');
const {
    addLeadAbatementRecord,
    getAllLeadAbatementRecords,
} = require('../controllers/leadAbatementController');

const router = express.Router();

// POST: Add a new lead abatement record
router.post('/add', addLeadAbatementRecord);

// GET: Retrieve all lead abatement records
router.get('/', getAllLeadAbatementRecords);

module.exports = router;
