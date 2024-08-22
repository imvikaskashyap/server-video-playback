import express from "express";
import {
  getUserProgress,
  getVideoProgress,
  updateVideoProgress,
} from "../controllers/videoProgressController.js";

const videoProgressRoutes = express.Router();

videoProgressRoutes.post("/videoProgress", updateVideoProgress);


videoProgressRoutes.get("/user/:userId", getUserProgress);

videoProgressRoutes.post("/getVideoProgress", getVideoProgress);

export default videoProgressRoutes;
