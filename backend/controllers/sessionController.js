// backend/controllers/sessionController.js

const Session = require('../models/sessionModel');
const Availability = require('../models/Availability');
const User = require('../models/User');

// Create a new session
exports.createSession = async (req, res) => {
  try {
    const { userId, start, end, duration, attendees, sessionType } = req.body;

    // Check for conflicting sessions
    const conflictingSession = await Session.findOne({
      start: { $lt: new Date(end) },
      end: { $gt: new Date(start) },
      'attendees.email': { $in: attendees.map((a) => a.email) },
    });

    if (conflictingSession) {
      return res.status(400).json({ message: 'Time slot is already booked.' });
    }

    // Create session
    const session = new Session({
      start,
      end,
      duration,
      attendees,
      sessionType,
      createdBy: userId,
    });

    await session.save();
    res.status(201).json(session);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get sessions for a user
exports.getUserSessions = async (req, res) => {
  try {
    const userId = req.params.userId;

    const sessions = await Session.find({
      'attendees.email': req.user.email,
    });

    res.status(200).json(sessions);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Admin view of all sessions
exports.getAllSessions = async (req, res) => {
  try {
    const sessions = await Session.find().populate('createdBy');
    res.status(200).json(sessions);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Reschedule a session
exports.rescheduleSession = async (req, res) => {
  try {
    const sessionId = req.params.sessionId;
    const { start, end } = req.body;

    // Check for conflicts
    const conflictingSession = await Session.findOne({
      _id: { $ne: sessionId },
      start: { $lt: new Date(end) },
      end: { $gt: new Date(start) },
      'attendees.email': { $in: req.body.attendees.map((a) => a.email) },
    });

    if (conflictingSession) {
      return res.status(400).json({ message: 'Time slot is already booked.' });
    }

    const session = await Session.findByIdAndUpdate(
      sessionId,
      { start, end },
      { new: true }
    );

    // Notify participants (implementation depends on notification system)
    // ...

    res.status(200).json(session);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Cancel a session
exports.cancelSession = async (req, res) => {
  try {
    const sessionId = req.params.sessionId;

    await Session.findByIdAndDelete(sessionId);

    // Notify participants (implementation depends on notification system)
    // ...

    res.status(200).json({ message: 'Session cancelled successfully.' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
