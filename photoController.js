const photo = require('../models/photo'); // Import the photo model

// Add a photo record
exports.addPhotoRecord = async (req, res) => {
    try {
        const { title, description, url, dateTaken } = req.body;

        // Validate required fields
        if (!title || !url) {
            return res.status(400).json({ message: 'Title and URL are required' });
        }

        // Create and save the photo record
        const record = new photo({ title, description, url, dateTaken });
        await record.save();

        res.status(201).json({ message: 'Photo added successfully', photo: record });
    } catch (error) {
        console.error('Error adding photo record:', error.message);
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

// Get all photo records
exports.getAllPhotoRecords = async (req, res) => {
    try {
        // Fetch all photo records from the database
        const records = await photo.find();
        res.status(200).json(records);
    } catch (error) {
        console.error('Error fetching photo records:', error.message);
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

// Debug exported functions
console.log('Exported functions from photoController:', exports);
