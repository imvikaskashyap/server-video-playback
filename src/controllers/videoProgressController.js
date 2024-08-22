import VideoProgress from "../models/VideoProgress.js";
import Video from "../models/Video.js";

export const updateVideoProgress = async (req, res) => {
  const { userId, videoId, durationWatched, videoDuration, currentVideoIndex } =
    req.body;

  try {
    let progress = await VideoProgress.findOne({ userId, videoId });

    if (progress) {
      progress.durationWatched = durationWatched;
      progress.currentVideoIndex = currentVideoIndex;
    } else {
      progress = new VideoProgress({
        userId,
        videoId,
        durationWatched,
        videoDuration,
        currentVideoIndex,
      });
    }

    await progress.save();

    res.status(200).json({ message: "Progress updated successfully" });
  } catch (error) {
    console.error("Error updating progress:", error);
    res
      .status(500)
      .json({ message: "Error updating progress", error: error.message });
  }
};

export const getUserProgress = async (req, res) => {
  const { userId } = req.params;

  try {
    const progressData = await VideoProgress.find({ userId }).populate("videoId");

    const formattedData = progressData.map((progress) => ({
      videoId: progress.videoId._id,
      videoTitle: progress.videoId.title,
      durationWatched: progress.durationWatched,
      videoDuration: progress.videoDuration,
      currentVideoIndex: progress.currentVideoIndex,
    }));

    res.status(200).json(formattedData);
  } catch (error) {
    console.error("Error fetching user progress:", error);
    res.status(500).json({ message: "Error fetching user progress", error: error.message });
  }
};


export const getVideoProgress = async (req, res) => {
  const { userId, videoId } = req.query;

  try {
    const progress = await VideoProgress.findOne({ userId, videoId });

    if (!progress) {
      return res
        .status(404)
        .json({ message: "Progress not found for this video" });
    }

    res.status(200).json({
      videoId: progress.videoId,
      durationWatched: progress.durationWatched,
      videoDuration: progress.videoDuration,
    });
  } catch (error) {
    console.error("Error fetching video progress:", error);
    res
      .status(500)
      .json({ message: "Error fetching video progress", error: error.message });
  }
};
