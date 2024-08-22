import getVideoDurationInSeconds from 'get-video-duration'
getVideoDurationInSeconds('https://videos.pexels.com/video-files/1321208/1321208-uhd_2560_1440_30fps.mp4').then((duration) => {
    console.log(duration)
}) 