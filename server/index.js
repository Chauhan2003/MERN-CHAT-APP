import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import morgan from 'morgan'
import databaseConnection from './db.js'
import userRoutes from './routes/user.js'

dotenv.config();
const app = express()
const PORT = process.env.PORT || 8080

// Middleware:
app.use(cors({ credentials: true, origin: 'http://localhost:3000' }));
app.use(express.json());
app.use(morgan('dev'));

// MongoDB Connection:
databaseConnection();

// API:
app.use('/api/user', userRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})

// Error Handling:
app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    return res.status(statusCode).json({
        success: false,
        statusCode,
        message,
    });
})