const mongoose = require('mongoose');

const demolitionSchema = new mongoose.Schema({
    description: { type: String, required: true },
    location: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Demolition', demolitionSchema);
