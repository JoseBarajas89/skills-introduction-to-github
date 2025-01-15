const SafetyProtocol = require('../models/SafetyProtocol'); // Import the SafetyProtocol model

// Add a new safety report
exports.addSafetyReport = async (req, res) => {
    try {
        const { title, description } = req.body;

        if (!title || !description) {
            return res.status(400).json({ message: 'Title and description are required' });
        }

        const report = new SafetyProtocol({ title, description });
        await report.save();

        res.status(201).json({ message: 'Safety protocol added successfully', report });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

// Get all safety reports
exports.getAllSafetyReports = async (req, res) => {
    try {
        const reports = await SafetyProtocol.find(); // Fetch all safety reports
        res.status(200).json(reports);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

// Debug the exported functions
console.log('Exported functions from safetyController:', exports);
