const mongoose = require('mongoose');

// Define Mold Schema
const moldSchema = new mongoose.Schema({
    site: { type: String, required: true },
    type: { type: String, required: true },
    severity: { type: String, required: true }, // Low, Medium, High
    dateIdentified: { type: Date, required: true },
    actionsTaken: { type: String },
    createdAt: { type: Date, default: Date.now },
});

// Export the Mold Model
module.exports = mongoose.model('mold', moldSchema);
