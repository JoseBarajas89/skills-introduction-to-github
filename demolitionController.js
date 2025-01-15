const Demolition = require('../models/demolition');

exports.addDemolitionRecord = async (req, res) => {
    try {
        const { description, location } = req.body;

        if (!description || !location) {
            return res.status(400).json({ message: 'Description and location are required' });
        }

        const record = new Demolition({ description, location });
        await record.save();

        res.status(201).json({ message: 'Demolition record added successfully', record });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

exports.getAllDemolitionRecords = async (req, res) => {
    try {
        const records = await Demolition.find();
        res.status(200).json(records);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};
