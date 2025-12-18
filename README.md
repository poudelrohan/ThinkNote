# ThinkNote

A MERN stack note-taking application.

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
