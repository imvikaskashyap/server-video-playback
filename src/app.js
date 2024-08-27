import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import errorMiddleware from "./middleware/errorMiddleware.js"; 
// import videoRoutes from "./routes/video.js";
// import userRoutes from "./routes/user.js";
// import videoProgressRoutes from "./routes/videoProgress.js";

import router from "./routes/index.js";

import authMiddleware from "./middleware/authMiddleware.js";
import path from "path";

dotenv.config();

const app = express();

// Body parser
app.use(express.json({ limit: "50mb" }));

// Middleware
app.use(bodyParser.json());
app.use("/uploads", express.static(path.join("uploads")));


// CORS ====>>> Cross Origin Resource Sharing
app.use(
  cors({
    origin: '*',
    methods: ["GET", "POST", "PUT", "DELETE"], 
    credentials: true, 
  })
);


// Testing API
app.get("/test", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Server is Working Fine😉!",
  });
});

// Routes
// app.use("/api/videos/v1", videoRoutes);
// app.use("/api/users/v1", userRoutes);
// app.use("/api/videoProgress/v1", videoProgressRoutes);
app.use("/api/v1", router);

// Unknown route
app.get("*", (req, res, next) => {
  const err = new Error(`Route ${req.originalUrl} Not Found`);

  next(err);
});

// Error middleware
app.use(errorMiddleware);

export default app;
