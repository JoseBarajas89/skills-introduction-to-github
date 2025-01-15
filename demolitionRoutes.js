const express = require('express');
const {
    addDemolitionRecord,
    getAllDemolitionRecords,
} = require('../controllers/demolitionController');

const router = express.Router();

// POST /api/demolition/add
router.post('/add', addDemolitionRecord);

// GET /api/demolition
router.get('/', getAllDemolitionRecords);

module.exports = router;
