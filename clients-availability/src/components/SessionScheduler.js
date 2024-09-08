// frontend/src/components/SessionScheduler.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SessionScheduler = ({ userId }) => {
  const [availability, setAvailability] = useState([]);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [attendees, setAttendees] = useState([]);
  const [sessionType, setSessionType] = useState('one-on-one');

  useEffect(() => {
    // Fetch user availability
    axios.get(`/api/availability/${userId}`).then((response) => {
      setAvailability(response.data);
    });
  }, [userId]);

  const handleSchedule = () => {
    const sessionData = {
      userId,
      start: selectedSlot.start,
      end: selectedSlot.end,
      duration: selectedSlot.duration,
      attendees,
      sessionType,
    };

    axios
      .post('/api/sessions', sessionData)
      .then((response) => {
        alert('Session scheduled successfully!');
      })
      .catch((error) => {
        alert(error.response.data.message);
      });
  };

  return (
    <div>
      <h2>Schedule a Session</h2>
      {/* Display availability and allow admin to select a slot */}
      {/* For simplicity, we assume availability is an array of slots */}
      <ul>
        {availability.map((slot, index) => (
          <li key={index}>
            {new Date(slot.start).toLocaleString()} -{' '}
            {new Date(slot.end).toLocaleString()}
            <button onClick={() => setSelectedSlot(slot)}>Select</button>
          </li>
        ))}
      </ul>

      {selectedSlot && (
        <div>
          <h3>Selected Slot</h3>
          <p>
            {new Date(selectedSlot.start).toLocaleString()} -{' '}
            {new Date(selectedSlot.end).toLocaleString()}
          </p>

          <label>
            Session Type:
            <select
              value={sessionType}
              onChange={(e) => setSessionType(e.target.value)}
            >
              <option value="one-on-one">One-on-One</option>
              <option value="group">Group</option>
            </select>
          </label>

          <h4>Attendees</h4>
          {/* Form to add attendees */}
          {/* For simplicity, let's assume we have a fixed attendee */}
          <button
            onClick={() =>
              setAttendees([
                ...attendees,
                { name: 'John Doe', email: 'john@example.com' },
              ])
            }
          >
            Add John Doe
          </button>

          <button onClick={handleSchedule}>Schedule Session</button>
        </div>
      )}
    </div>
  );
};

export default SessionScheduler;
