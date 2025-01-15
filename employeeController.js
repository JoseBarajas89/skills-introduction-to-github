const Employee = require('../models/employee'); // Correctly importing Employee model

// Add a new employee
exports.addEmployee = async (req, res) => {
    console.log('Request body:', req.body);
    try {
        const { name, role, department } = req.body;

        if (!name || !role || !department) {
            return res.status(400).json({ message: 'Name, role, and department are required' });
        }

        const employee = new Employee({ name, role, department });
        const savedEmployee = await employee.save();

        res.status(201).json({ message: 'Employee added successfully', employee: savedEmployee });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

// Get all employees
exports.getAllEmployees = async (req, res) => {
    try {
        const employees = await Employee.find();
        res.status(200).json(employees);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};
