const mongoose = require('mongoose');

const complianceSchema = new mongoose.Schema({
    policyName: { type: String, required: true },
    description: { type: String, required: true },
    effectiveDate: { type: Date, required: true },
    status: { type: String, required: true }
}, { timestamps: true });

module.exports = mongoose.model('Compliance', complianceSchema);
