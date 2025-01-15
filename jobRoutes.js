const express = require('express');
const { addJob, getAllJobs } = require('../controllers/jobController'); // Import controller functions

// Debug imported functions
console.log('Imported functions from jobController:', { addJob, getAllJobs });

const router = express.Router();

// Define routes
router.post('/add', addJob); // POST route to add a job
router.get('/', getAllJobs); // GET route to fetch all jobs

module.exports = router;
