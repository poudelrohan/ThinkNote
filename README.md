# ThinkNote

A personal MERN note-taking app to capture, view, and manage notes quickly. Built as a practice project for full‑stack basics (API, persistence, routing, styling) with a simple, clean UI.

## Tech

- MongoDB, Express, Node for the API and persistence
- React, Vite, Tailwind + DaisyUI for the frontend
- Axios for API calls, react-router for navigation

## Setup

1. Clone the repository
2. Navigate to backend: `cd backend`
3. Install dependencies: `npm install`
4. Create a `.env` file with:
   ```
   MONGO_URI=your_mongodb_connection_string
   PORT=5000
   ```
5. Start the server: `npm start`

## API Endpoints

- `GET /api/notes` - Get all notes
- `POST /api/notes` - Create a note
- `PUT /api/notes/:id` - Update a note
- `DELETE /api/notes/:id` - Delete a note
