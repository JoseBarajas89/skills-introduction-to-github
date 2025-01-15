const mongoose = require('mongoose');

// Define Photo Schema
const photoSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String },
    url: { type: String, required: true },
    dateTaken: { type: Date },
    createdAt: { type: Date, default: Date.now },
});

// Export the Photo Model
module.exports = mongoose.model('photo', photoSchema);
