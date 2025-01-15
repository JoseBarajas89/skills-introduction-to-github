const mongoose = require('mongoose');

// Define Cost Schema
const costSchema = new mongoose.Schema({
    projectId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'Project' },
    amount: { type: Number, required: true },
    details: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
});

// Export the Cost Model
module.exports = mongoose.model('cost', costSchema);
