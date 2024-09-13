# Memory Master: Emoji Challenge Backend

![Memory Master Icon](./memory-master-icon.svg)

## 🖥️ About the Backend

This is the backend server for the Memory Master: Emoji Challenge game. It handles player authentication, score tracking, and leaderboard functionality for the game.

## 🚀 Features

- User authentication and authorization
- Score tracking and storage
- Leaderboard generation
- RESTful API endpoints for game data
- Secure password hashing
- Database integration

## 🛠 Tech Stack

- Node.js
- Express.js
- MongoDB (with Mongoose ODM)
- JSON Web Tokens (JWT) for authentication
- bcrypt for password hashing
- dotenv for environment variable management

## 🏁 Getting Started

### Prerequisites

- Node.js (v14.0.0 or later)
- npm (v6.0.0 or later)
- MongoDB (v4.0.0 or later)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/suiisharma/Shram-Backend.git
   cd Shram-Backend
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   Create a `.env` file in the root directory and add:
   ```
   PORT=3000
   MONGO_URI=mongodb://localhost:27017/memory_master
   JWT_SECRET=your_jwt_secret_key
   NODE_ENV=development
   frontend_url=your_frontend_url
   ```
   Replace `your_jwt_secret_key` with a secure random string.

4. Start the server:
   ```bash
   npm start
   ```

The server will start running on `http://localhost:3000`.

## 📚 API Documentation

### Authentication
- POST `/api/auth/register`: Register a new user
- POST `/api/auth/login`: Log in a user
- POST `/api/auth/logout`: Log out the current user
- GET `/api/auth/me`: Get current user information

### Game
- POST `/api/game/score`: Submit a new game score
- GET `/api/game/leaderboard`: Get the top players in the global leaderboard

## 🔒 Security

- Passwords are hashed using bcrypt before storing in the database.
- JWT is used for maintaining user sessions.
- Environment variables are used for sensitive data.



## 🏗 Deployment

1. Set up a MongoDB database (either locally or using a cloud service like MongoDB Atlas).
2. Set the `MONGODB_URI` environment variable to your database connection string.
3. Deploy the application to your preferred hosting service (e.g., Heroku, DigitalOcean, AWS).
4. Ensure all environment variables are properly set in your production environment.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.


## 🙏 Acknowledgements

- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Mongoose](https://mongoosejs.com/)
- [JSON Web Tokens](https://jwt.io/)
- All contributors and players!

For any questions or support, please open an issue in the GitHub repository.
