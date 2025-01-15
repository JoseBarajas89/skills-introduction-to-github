const record = require('../models/record'); // Import the record model

// Add a record
exports.addRecord = async (req, res) => {
    try {
        const { category, description, date, details } = req.body;

        // Validate required fields
        if (!category || !description || !date) {
            return res.status(400).json({ message: 'Category, description, and date are required' });
        }

        // Create and save the record
        const newRecord = new record({ category, description, date, details });
        await newRecord.save();

        res.status(201).json({ message: 'Record added successfully', record: newRecord });
    } catch (error) {
        console.error('Error adding record:', error.message);
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

// Get all records
exports.getAllRecords = async (req, res) => {
    try {
        // Fetch all records from the database
        const records = await record.find();
        res.status(200).json(records);
    } catch (error) {
        console.error('Error fetching records:', error.message);
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

// Debug exported functions
console.log('Exported functions from recordController:', exports);
