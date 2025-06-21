# URL Shortener

A simple URL shortening service built with Node.js, Express, and MongoDB that allows users to create short URLs and track their usage analytics.

## Features

- Create short URLs from long URLs
- Redirect to original URLs using short IDs
- Track visit history with timestamps
- Get analytics for each short URL (total clicks and visit history)

## Project Structure

```
URL-SHORTENER/
├── index.js          # Main server file
├── connect.js        # MongoDB connection utility
├── controllers/
│   └── url.js        # URL controller with business logic
├── models/
│   └── url.js        # MongoDB schema for URLs
├── routes/
│   └── url.js        # Express routes
└── package.json      # Project dependencies
```

## Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Make sure MongoDB is running on localhost:27017
4. Start the server:
   ```bash
   npm start
   ```

## API Endpoints

### Create Short URL
- **POST** `/url/`
- **Body:** `{ "url": "https://example.com" }`
- **Response:** `{ "id": "shortId" }`

### Redirect to Original URL
- **GET** `/url/:shortId`
- Redirects to the original URL and tracks the visit

### Get Analytics
- **GET** `/url/analytics/:shortId`
- **Response:** 
  ```json
  {
    "totalClicks": 5,
    "analytics": [
      { "timestamp": 1234567890 },
      { "timestamp": 1234567891 }
    ]
  }
  ```

## Database Schema 

The URL model includes:
- `shortId`: Unique identifier for the short URL
- `redirectURL`: The original long URL
- `visitHistory`: Array of visit timestamps
- `timestamps`: Created and updated timestamps

## Dependencies

- **Express.js** - Web framework
- **Mongoose** - MongoDB ODM
- **Shortid** - URL shortening library
- **Nanoid** - Alternative ID generation (installed but not used)

## Usage Example

1. Start the server: `npm start`
2. Create a short URL:
   ```bash
   curl -X POST http://localhost:8001/url/ \
     -H "Content-Type: application/json" \
     -d '{"url": "https://www.google.com"}'
   ```
3. Use the returned short ID to redirect: `http://localhost:8001/url/[shortId]`
4. Check analytics: `http://localhost:8001/url/analytics/[shortId]` 