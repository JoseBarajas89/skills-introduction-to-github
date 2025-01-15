const job = require('../models/job'); // Import the job model

// Add a new job record
exports.addJob = async (req, res) => {
    try {
        const { title, description, startDate, endDate } = req.body;

        // Validate required fields
        if (!title || !description || !startDate) {
            return res.status(400).json({ message: 'Title, description, and start date are required' });
        }

        // Create and save the job record
        const newJob = new job({ title, description, startDate, endDate });
        await newJob.save();

        res.status(201).json({ message: 'Job added successfully', job: newJob });
    } catch (error) {
        console.error('Error adding job:', error.message);
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

// Get all jobs
exports.getAllJobs = async (req, res) => {
    try {
        // Fetch all jobs from the database
        const jobs = await job.find();
        res.status(200).json(jobs);
    } catch (error) {
        console.error('Error fetching jobs:', error.message);
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

// Debug exported functions
console.log('Exported functions from jobController:', exports);
