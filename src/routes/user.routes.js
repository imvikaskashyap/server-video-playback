import express from 'express';
import { registerUser, loginUser, getUserProgress } from '../controllers/userController.js';

const userRoutes = express.Router();


userRoutes.post('/register', registerUser);


userRoutes.post('/login', loginUser);


userRoutes.get('/progress/:userId', getUserProgress);

export default userRoutes;
