// frontend/src/components/SessionList.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SessionList = ({ userId, isAdmin }) => {
  const [sessions, setSessions] = useState([]);

  useEffect(() => {
    const url = isAdmin ? '/api/sessions' : `/api/sessions/user/${userId}`;
    axios.get(url).then((response) => {
      setSessions(response.data);
    });
  }, [userId, isAdmin]);

  return (
    <div>
      <h2>Upcoming Sessions</h2>
      <ul>
        {sessions.map((session) => (
          <li key={session._id}>
            {new Date(session.start).toLocaleString()} -{' '}
            {new Date(session.end).toLocaleString()} | Attendees:{' '}
            {session.attendees.map((a) => a.name).join(', ')}
            {isAdmin && (
              <>
                {/* Buttons to reschedule or cancel */}
                <button>Reschedule</button>
                <button>Cancel</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SessionList;
