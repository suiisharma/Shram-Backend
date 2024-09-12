import express from 'express';
import connectDB from './config/db.js';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import authRoutes from './routes/authRoutes.js';
import scoreRoutes from './routes/scoreRoutes.js';
import dotenv from 'dotenv';
import Logger from './logger/winston_logger.js';

dotenv.config();

const app = express();

// Connect to MongoDB
connectDB();

// Middleware

app.use( cors({
    origin: ["https://shram-frontend.vercel.app"],
    methods: ["GET", "POST", "DELETE", "PUT"],
    credentials: true,
  }));
app.use(express.json());
app.use(cookieParser());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/game', scoreRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => Logger.info(`Server running on port ${PORT}`));
