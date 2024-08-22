import Video from "../models/Video.js";
import VideoProgress from "../models/VideoProgress.js";
import User from "../models/User.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";
import { getVideoDurationInSeconds } from "get-video-duration";

const addVideo = async (req, res) => {
  try {
    const { title } = req.body;

    if (!req.file) {
      return res.status(400).json({ message: "No video uploaded" });
    }

    const videoUrlPath = req.file.path;

    const videoUrl = await uploadOnCloudinary(videoUrlPath);

    const duration = await getVideoDurationInSeconds(videoUrl.url);

    // const duration = Math.floor(durationInSec);

    // console.log(duration , "console on line 26")

    if (!videoUrl) {
      return res
        .status(500)
        .json({ message: "Failed to upload video to Cloudinary" });
    }

    const newVideo = new Video({
      title,
      videoUrl: videoUrl.url,
      duration,
    });

    await newVideo.save();

    res.status(201).json({
      success: true,
      message: "Video uploaded successfully",
      video: newVideo,
    });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({
      success: false,
      message: "Error uploading video",
      error: error.message,
    });
  }
};

const getVideoList = async (req, res) => {
  const videos = await Video.find();
  res.json(videos);
};

const getTotalVideoDuration = async (req, res) => {
  try {
    const videos = await Video.find();
    const totalDuration = videos.reduce(
      (acc, video) => acc + video.duration,
      0
    );

    res.status(200).json({
      success: true,
      totalDuration,
    });
  } catch (error) {
    console.error("Error fetching total video duration:", error);
    res.status(500).json({
      success: false,
      message: "Error fetching total video duration",
      error: error.message,
    });
  }
};

export { addVideo, getVideoList, getTotalVideoDuration };
