import express from "express";
import userRoutes from "./user.routes.js";
import videoRoutes from "./video.routes.js";
import videoProgressRoutes from "./videoProgress.routes.js";


const router = express.Router();

router.use("/users", userRoutes);
router.use("/videos", videoRoutes);
router.use("/progress", videoProgressRoutes);

export default router;
