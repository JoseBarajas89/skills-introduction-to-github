const Asbestos = require('../models/asbestos');

// Add a new asbestos record
exports.addAsbestosRecord = async (req, res) => {
    try {
        const { location, status, notes } = req.body;

        if (!location || !status) {
            return res.status(400).json({
                message: "Location and status are required",
            });
        }

        const newRecord = new Asbestos({ location, status, notes });
        const savedRecord = await newRecord.save();

        res.status(201).json({
            message: "Asbestos record added successfully",
            asbestosRecord: savedRecord,
        });
    } catch (error) {
        res.status(500).json({
            message: "Server error",
            error: error.message,
        });
    }
};

// Get all asbestos records
exports.getAllAsbestosRecords = async (req, res) => {
    try {
        const records = await Asbestos.find();
        res.status(200).json({
            message: "All asbestos records retrieved successfully",
            records,
        });
    } catch (error) {
        res.status(500).json({
            message: "Server error",
            error: error.message,
        });
    }
};
