// backend/models/sessionModel.js

const mongoose = require('mongoose');

const SessionSchema = new mongoose.Schema({
  start: {
    type: Date,
    required: true,
  },
  end: {
    type: Date,
    required: true,
  },
  duration: {
    type: Number,
    required: true, // in minutes
  },
  attendees: [
    {
      name: String,
      email: String,
    },
  ],
  sessionType: {
    type: String,
    enum: ['one-on-one', 'group'],
    required: true,
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
});

module.exports = mongoose.model('Session', SessionSchema);
