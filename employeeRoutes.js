const express = require('express');
const { addEmployee, getAllEmployees } = require('../controllers/employeeController');

const router = express.Router();

// Define routes
router.post('/add', addEmployee);
router.get('/', getAllEmployees);

module.exports = router;
