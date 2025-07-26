# Message Nest

Message Nest is my first Project using Express framework.

It is a simple Node.js/Express application for managing and displaying messages. It uses EJS for templating and stores messages in a JSON file.

## Features

- View all messages
- Add new messages
- View message details
- Error handling with custom error pages

## Project Structure

```
app.js                # Main application entry point
db.js                 # Handles data storage and retrieval
messages.json         # Stores messages data
controllers/          # Route controllers
routes/               # Express routers
views/                # EJS templates
public/               # Static assets (CSS)
errors/               # Custom error classes
```

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```
2. **Start the server:**
   ```bash
   node app.js
   ```
3. **Open your browser:**
   Visit [http://localhost:3000](http://localhost:3000)

## Requirements

- Node.js (v14 or higher recommended)
- npm
