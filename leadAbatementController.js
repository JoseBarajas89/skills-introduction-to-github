const LeadAbatement = require('../models/leadAbatement');

// Add a new lead abatement record
const addLeadAbatementRecord = async (req, res) => {
    const { site, method, date, notes } = req.body;

    if (!site || !method || !date) {
        return res.status(400).json({ message: 'Site, method, and date are required' });
    }

    try {
        const leadAbatement = new LeadAbatement({ site, method, date, notes });
        const savedRecord = await leadAbatement.save();
        res.status(201).json({
            message: 'Lead abatement record added successfully',
            leadAbatement: savedRecord,
        });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

// Retrieve all lead abatement records
const getAllLeadAbatementRecords = async (req, res) => {
    try {
        const records = await LeadAbatement.find();
        res.status(200).json(records);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

module.exports = {
    addLeadAbatementRecord,
    getAllLeadAbatementRecords,
};
