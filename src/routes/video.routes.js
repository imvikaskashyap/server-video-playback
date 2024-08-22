import express from 'express'
import multer from 'multer';
const videoRoutes = express.Router();
import { addVideo, getTotalVideoDuration, getVideoList,  }from '../controllers/videoController.js';
import { upload } from '../middleware/uploadMiddleware.js';

// Admin upload video
videoRoutes.post('/upload', upload.single('video'), addVideo);


videoRoutes.get('/videoList', getVideoList);


videoRoutes.get('/totalVideoDuration', getTotalVideoDuration);



export default videoRoutes
