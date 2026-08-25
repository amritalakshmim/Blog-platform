# WriteWave — AI-Powered Blog Website

WriteWave is a full-stack blog platform that allows users to explore and read blogs, while administrators can create, update, delete, and manage blog posts and comments through an admin dashboard.

## Features

* User-friendly home page with latest blog posts
* Browse blogs by category
* View detailed blog posts
* Admin authentication and protected dashboard
* Create, update, and delete blog posts
* Upload and manage blog images using ImageKit
* Comment management and approval
* MongoDB database integration
* RESTful APIs for blogs, comments, authentication, and admin operations
* Responsive design for different screen sizes

## Tech Stack

### Frontend

* React.js
* Tailwind CSS
* Axios
* React Router
* Marked

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT Authentication

### Services

* ImageKit — Image upload and storage

## Project Structure

```text
WriteWave/
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── assets/
│   │   └── App.jsx
│   └── package.json
│
├── server/                 # Node.js/Express backend
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── configs/
│   └── server.js
│
└── README.md
```

## Installation

### 1. Clone the repository

```bash
git clone https://github.com/your-username/writewave.git
cd writewave
```

### 2. Install frontend dependencies

```bash
cd client
npm install
```

### 3. Install backend dependencies

```bash
cd ../server
npm install
```

## Environment Variables

Create a `.env` file inside the `server` directory:

```env
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
IMAGEKIT_PRIVATE_KEY=your_imagekit_private_key
IMAGEKIT_PUBLIC_KEY=your_imagekit_public_key
IMAGEKIT_URL_ENDPOINT=your_imagekit_url_endpoint
```

Make sure you do not commit your `.env` file to GitHub.

## Running the Project

### Start the backend

```bash
cd server
npm run server
```

### Start the frontend

```bash
cd client
npm run dev
```

The application will then be available at the local development URL shown by Vite.

## API Functionality

The backend provides APIs for:

* Admin login
* Blog creation
* Blog listing
* Blog details
* Blog updating
* Blog deletion
* Comment creation
* Comment retrieval
* Comment approval
* Comment deletion
* Admin dashboard statistics

## Authentication

Admin routes are protected using JWT-based authentication middleware. Only authenticated administrators can access protected operations such as creating, updating, and deleting blogs and managing comments.

## Future Improvements

* User registration and profiles
* Search functionality
* Blog likes and bookmarks
* Social sharing
* Pagination and advanced filtering
* Richer AI-assisted blog generation
* Email notifications

## Author

**Amritalakshmi**

Built as a full-stack MERN project to demonstrate frontend development, REST API design, authentication, database integration, and cloud image management.
