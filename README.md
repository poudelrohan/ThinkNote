# ThinkNote

A full-stack MERN note-taking app to capture, view, edit, and manage notes. Features a responsive UI with dark-themed styling, Upstash Redis rate limiting, and a clean REST API.

## Demo

<!-- Add demo GIF/screenshot here -->
> Demo coming soon

![ThinkNote Demo](https://via.placeholder.com/800x400?text=Demo+Coming+Soon)

## Features

- **Create Notes** — Quick form to add notes with title and content
- **View & Edit** — Click any note to view full details and edit inline
- **Delete with Confirmation** — Modal confirmation before deleting notes
- **Rate Limiting** — Upstash Redis-backed sliding window (100 req/60s) with user-friendly UI feedback
- **Responsive Grid** — Mobile-first layout (1/2/3 column grid)
- **Toast Notifications** — Real-time feedback on all actions
- **Empty State UI** — Friendly prompt when no notes exist

## Tech Stack

| Layer | Technologies |
|-------|-------------|
| **Frontend** | React 19, Vite, Tailwind CSS, DaisyUI, React Router, Axios |
| **Backend** | Node.js, Express.js, Mongoose |
| **Database** | MongoDB Atlas |
| **Rate Limiting** | Upstash Redis (sliding window) |
| **Icons** | Lucide React |

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18+
- [MongoDB Atlas](https://www.mongodb.com/atlas) account (or local MongoDB)
- [Upstash Redis](https://upstash.com/) account (for rate limiting)

### Installation

```bash
# Clone the repo
git clone https://github.com/poudelrohan/ThinkNote.git
cd ThinkNote
```

### Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file in `backend/`:

```env
MONGO_URI=your_mongodb_connection_string
PORT=5001
UPSTASH_REDIS_REST_URL=your_upstash_redis_url
UPSTASH_REDIS_REST_TOKEN=your_upstash_redis_token
NODE_ENV=development
```

```bash
npm run dev    # Development (with nodemon)
npm start      # Production
```

### Frontend Setup

```bash
cd frontend
npm install
npm run dev    # Starts on http://localhost:5173
```

### Full Stack (from root)

```bash
npm run build   # Installs both + builds frontend
npm start       # Serves API + static frontend
```

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/notes` | Get all notes (sorted newest first) |
| `GET` | `/api/notes/:id` | Get a single note |
| `POST` | `/api/notes` | Create a note (`{title, content}`) |
| `PUT` | `/api/notes/:id` | Update a note (`{title, content}`) |
| `DELETE` | `/api/notes/:id` | Delete a note |

## Project Structure

```
ThinkNote/
├── backend/
│   └── src/
│       ├── config/         # MongoDB + Upstash Redis config
│       ├── controllers/    # CRUD logic
│       ├── middleware/      # Rate limiter
│       ├── model/          # Mongoose Note schema
│       ├── routes/         # Express routes
│       └── server.js       # App entry point
├── frontend/
│   └── src/
│       ├── components/     # Navbar, NoteCard, RateLimitedUI
│       ├── pages/          # Home, Create, NoteDetail
│       ├── lib/            # Axios client, utilities
│       └── App.jsx         # React Router setup
└── package.json            # Root scripts (build + start)
```

## License

This project is open source and available under the [MIT License](LICENSE).
