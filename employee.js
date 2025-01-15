const mongoose = require('mongoose');

// Employee schema definition
const employeeSchema = new mongoose.Schema({
    name: { type: String, required: true },
    role: { type: String, required: true },
    department: { type: String, required: true },
    hireDate: { type: Date, default: Date.now },
});

// Export the Employee model
module.exports = mongoose.model('Employee', employeeSchema);
