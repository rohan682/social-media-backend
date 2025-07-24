# Social Media Backend API

A RESTful backend API for a social media platform built with Next.js API routes, MongoDB, and Mongoose. This project provides user authentication with JWT, user registration, post creation, and retrieval functionalities. Designed to serve as the backend for any social media frontend app.

---

## Features

- User registration and login with secure password hashing (bcrypt)
- JWT-based authentication and authorization
- Create, fetch, and manage posts
- MongoDB data persistence with Mongoose ODM
- Structured API routes using Next.js app router
- Ready for further extensions: comments, likes, follows, etc.

---

## Tech Stack

- **Next.js** (API routes)
- **MongoDB** (NoSQL database)
- **Mongoose** (MongoDB ODM)
- **JSON Web Tokens (JWT)** for authentication
- **bcrypt** for password hashing
- **TypeScript**

---


## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

### Prerequisites

- Node.js (v16+ recommended)
- MongoDB (local installation or MongoDB Atlas cluster)
- Git

### Installation

1. Clone this repo:

```bash
git clone https://github.com/yourusername/social-media-backend.git
cd social-media-backend
```

---

### Install dependencies

```bash
npm install
```

---

### Create a .env.local file in the root directory with the following variables

MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key

---

### Run the development server

```bash
npm run dev
```

---

### API Endpoints

Auth

POST /api/auth/register - Register a new user
POST /api/auth/login - Login and receive JWT token

Users

GET /api/users/me - Get current authenticated user details (requires JWT)

Posts

GET /api/posts - Fetch all posts
POST /api/posts - Create a new post (requires JWT)

---

### Usage

Use any REST client like Postman or the VSCode REST Client extension to test the endpoints.

Include your JWT token in the Authorization header as:

Authorization: Bearer <your_jwt_token>

---

### Future Improvements

Add comments, likes, and follow/unfollow features

Add pagination and filtering for posts

Add unit and integration tests

Add deployment scripts and CI/CD pipelines

---

### License

This project is licensed under the MIT License.

---

### Contact

Created by Rohan Pujara