import mongoose from "mongoose";

const videoProgressSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  videoId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Video",
    required: true,
  },
  durationWatched: {
    type: Number,
    required: true,
  },
  videoDuration: {
    type: Number,
    required: true,
  },
  currentVideoIndex: { 
    type: Number,
    required: true,
  }
});

const VideoProgress = mongoose.model("VideoProgress", videoProgressSchema);

export default VideoProgress;
