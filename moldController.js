const Mold = require('../models/mold');

// Add a new mold record
const addMoldRecord = async (req, res) => {
    const { location, severity, notes } = req.body;

    if (!location || !severity) {
        return res.status(400).json({ message: 'Location and severity are required' });
    }

    try {
        const mold = new Mold({ location, severity, notes });
        const savedRecord = await mold.save();
        res.status(201).json({
            message: 'Mold record added successfully',
            moldRecord: savedRecord,
        });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

// Retrieve all mold records
const getAllMoldRecords = async (req, res) => {
    try {
        const records = await Mold.find();
        res.status(200).json(records);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

module.exports = {
    addMoldRecord,
    getAllMoldRecords,
};
