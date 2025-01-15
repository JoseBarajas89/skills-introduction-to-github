const cost = require('../models/cost'); // Import the lowercase cost model

// Add a cost record
exports.addCostRecord = async (req, res) => {
    try {
        const { projectId, amount, details } = req.body;

        // Validate required fields
        if (!projectId || !amount || !details) {
            return res.status(400).json({ message: 'Project ID, amount, and details are required' });
        }

        // Create and save the cost record
        const newCost = new cost({ projectId, amount, details });
        await newCost.save();

        res.status(201).json({ message: 'Cost record added successfully', cost: newCost });
    } catch (error) {
        console.error('Error adding cost record:', error.message);
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

// Get all cost records
exports.getAllCostRecords = async (req, res) => {
    try {
        // Fetch all cost records from the database
        const records = await cost.find();
        res.status(200).json(records);
    } catch (error) {
        console.error('Error fetching cost records:', error.message);
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

// Debug exported functions
console.log('Exported functions from costController:', exports);
