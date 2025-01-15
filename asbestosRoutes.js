const express = require('express');
const {
    addAsbestosRecord,
    getAllAsbestosRecords,
} = require('../controllers/asbestosController');

const router = express.Router();

// POST: Add a new asbestos record
router.post('/add', addAsbestosRecord);

// GET: Retrieve all asbestos records
router.get('/', getAllAsbestosRecords);

module.exports = router;
