const mongoose = require('mongoose');

// Define Lead Abatement Schema
const leadAbatementSchema = new mongoose.Schema({
    site: { type: String, required: true },
    method: { type: String, required: true },
    date: { type: Date, required: true },
    notes: { type: String },
    createdAt: { type: Date, default: Date.now },
});

// Export the Lead Abatement Model
module.exports = mongoose.model('leadAbatement', leadAbatementSchema);
