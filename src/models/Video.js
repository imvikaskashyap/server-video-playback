import mongoose from "mongoose";

const videoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },

  videoUrl: {
    type: String,
    required: true,
  },
  duration: { type: Number, required: true },
});

const Video = mongoose.model("Video", videoSchema);
export default Video;
