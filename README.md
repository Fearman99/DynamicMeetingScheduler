# Dynamic Meeting Scheduler

## Overview

The Client Availability System is a full-stack web application designed to manage client availability and event scheduling. It features a frontend built with React and TypeScript and a backend using Node.js, Express.js, and MongoDB. The application allows users to log in, view their availability, and schedule sessions with clients.

**Backend** : https://dynamicmeetingscheduler.onrender.com

## Features

- **User Authentication**: Secure login and session management.
- **Client Dashboard**: View and manage client availability.
- **Session Scheduling**: Schedule one-on-one or group sessions.
- **Responsive Design**: Fully responsive UI for desktop and mobile.

## Technologies Used

- **Frontend**:
  - React.js
  - TypeScript
  - SCSS/CSS
  - Axios for API requests

- **Backend**:
  - Node.js
  - Express.js
  - MongoDB
  - CORS for cross-origin requests


## Usage

1. **Login**: Navigate to the login page to authenticate and access the client dashboard.

2. **Dashboard**: Once logged in, you can view and manage client availability.

3. **Session Scheduling**: Schedule sessions based on available slots.

## API Endpoints

- **POST** `/api/users/login`: Logs in a user with their email.
- **GET** `/api/users`: Retrieves a list of users.
- **GET** `/api/availability/:userId`: Retrieves availability for a specific user.
- **GET** `/api/schedule`: Retrieves scheduled sessions.
- **POST** `/api/sessions`: Creates a new session.





