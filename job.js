const mongoose = require('mongoose');

// Define Job Schema
const jobSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date },
    createdAt: { type: Date, default: Date.now },
});

// Export the Job Model
module.exports = mongoose.model('job', jobSchema);
