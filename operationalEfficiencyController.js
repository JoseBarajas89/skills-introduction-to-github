const operationalEfficiency = require('../models/operationalEfficiency'); // Import the model

// Add an operational efficiency record
exports.addOperationalEfficiencyRecord = async (req, res) => {
    try {
        const { metric, value, date, notes } = req.body;

        // Validate required fields
        if (!metric || !value || !date) {
            return res.status(400).json({ message: 'Metric, value, and date are required' });
        }

        // Create and save the record
        const record = new operationalEfficiency({ metric, value, date, notes });
        await record.save();

        res.status(201).json({ message: 'Operational efficiency record added successfully', operationalEfficiency: record });
    } catch (error) {
        console.error('Error adding operational efficiency record:', error.message);
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

// Get all operational efficiency records
exports.getAllOperationalEfficiencyRecords = async (req, res) => {
    try {
        // Fetch all records from the database
        const records = await operationalEfficiency.find();
        res.status(200).json(records);
    } catch (error) {
        console.error('Error fetching operational efficiency records:', error.message);
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

// Debug exported functions
console.log('Exported functions from operationalEfficiencyController:', exports);
