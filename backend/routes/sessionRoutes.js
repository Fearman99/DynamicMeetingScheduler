// backend/routes/sessionRoutes.js

const express = require('express');
const router = express.Router();
const sessionController = require('../controllers/sessionController');
const { authenticateUser, authorizeAdmin } = require('../middleware/authMiddleware');

// Create a new session (Admin only)
router.post('/', authenticateUser, authorizeAdmin, sessionController.createSession);

// Get sessions for a user
router.get('/user/:userId', authenticateUser, sessionController.getUserSessions);

// Get all sessions (Admin only)
router.get('/', authenticateUser, authorizeAdmin, sessionController.getAllSessions);

// Reschedule a session (Admin only)
router.put('/:sessionId', authenticateUser, authorizeAdmin, sessionController.rescheduleSession);

// Cancel a session (Admin only)
router.delete('/:sessionId', authenticateUser, authorizeAdmin, sessionController.cancelSession);

module.exports = router;
