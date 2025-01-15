const mongoose = require('mongoose');

// Define Asbestos Schema
const asbestosSchema = new mongoose.Schema({
    location: { type: String, required: true },
    status: { type: String, required: true },
    notes: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
});

// Export the asbestos Model (lowercase)
module.exports = mongoose.model('asbestos', asbestosSchema);
