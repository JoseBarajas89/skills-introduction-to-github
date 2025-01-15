const express = require('express');
const {
    addMoldRecord,
    getAllMoldRecords,
} = require('../controllers/moldController');

const router = express.Router();

// POST: Add a new mold record
router.post('/add', addMoldRecord);

// GET: Retrieve all mold records
router.get('/', getAllMoldRecords);

module.exports = router;
