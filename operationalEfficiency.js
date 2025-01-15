const mongoose = require('mongoose');

// Define Operational Efficiency Schema
const operationalEfficiencySchema = new mongoose.Schema({
    metric: { type: String, required: true },
    value: { type: Number, required: true },
    date: { type: Date, required: true },
    notes: { type: String },
    createdAt: { type: Date, default: Date.now },
});

// Export the Operational Efficiency Model
module.exports = mongoose.model('operationalEfficiency', operationalEfficiencySchema);
