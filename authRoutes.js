const express = require('express');
const { registerUser, loginUser } = require('../controllers/authController');

// Debugging: Log the imported functions
console.log('Auth Controller:', { registerUser, loginUser });

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);

module.exports = router;
