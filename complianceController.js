const Compliance = require('../models/compliance');

// Add a compliance record
const addCompliance = async (req, res) => {
    try {
        const { policyName, description, effectiveDate, status } = req.body;

        if (!policyName || !description || !effectiveDate || !status) {
            return res.status(400).json({
                message: 'Policy name, description, effective date, and status are required.',
            });
        }

        const complianceRecord = await Compliance.create({
            policyName,
            description,
            effectiveDate,
            status,
        });

        res.status(201).json({
            message: 'Compliance record added successfully',
            complianceRecord,
        });
    } catch (error) {
        res.status(500).json({
            message: 'Server error',
            error: error.message,
        });
    }
};

// Get all compliance records
const getAllCompliances = async (req, res) => {
    try {
        const complianceRecords = await Compliance.find();
        res.status(200).json(complianceRecords);
    } catch (error) {
        res.status(500).json({
            message: 'Server error',
            error: error.message,
        });
    }
};

module.exports = { addCompliance, getAllCompliances };