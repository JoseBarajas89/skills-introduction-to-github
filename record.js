const mongoose = require('mongoose');

const recordSchema = new mongoose.Schema({
    name: { type: String, required: true },
    details: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
});

const Record = mongoose.models.Record || mongoose.model('Record', recordSchema);

module.exports = Record;
