// Videos.js

import React, { useState, useEffect } from 'react';
import './Videos.css'; // Import the CSS file for styling

const VideosComputerScience = () => {
  const [videoTitle, setVideoTitle] = useState('');
  const [videoDescription, setVideoDescription] = useState('');
  const [uploadedVideos, setUploadedVideos] = useState([]);

  useEffect(() => {
    // Load videos from localStorage on component mount
    const storedVideos = localStorage.getItem('uploadedVideos');
    if (storedVideos) {
      setUploadedVideos(JSON.parse(storedVideos));
    }
  }, []);

  const saveToLocalStorage = (video) => {
    try {
      const storedVideos = localStorage.getItem('uploadedVideos');
      const videos = storedVideos ? JSON.parse(storedVideos) : [];

      videos.push(video);

      // Limit the stored videos to a reasonable number
      const maxStoredVideos = 50;
      const trimmedVideos = videos.slice(-maxStoredVideos);

      localStorage.setItem('uploadedVideos', JSON.stringify(trimmedVideos));
    } catch (error) {
      console.error('Error saving to localStorage:', error);
    }
  };

  const handleUploadVideo = async (e) => {
    e.preventDefault();
    const videoFile = e.target.videoFile.files[0];

    if (videoTitle.trim() !== '' && videoDescription.trim() !== '' && videoFile) {
      const currentDate = new Date();
      const uploadDateTime = currentDate.toLocaleString();

      const reader = new FileReader();
      reader.onload = () => {
        const newVideo = {
          title: videoTitle,
          description: videoDescription,
          dataURL: reader.result,
          uploadDateTime: uploadDateTime,
        };

        setUploadedVideos(prevVideos => [...prevVideos, newVideo]);

        // Save only the new video to localStorage
        saveToLocalStorage(newVideo);

        // Clear form fields
        setVideoTitle('');
        setVideoDescription('');
      };

      reader.readAsDataURL(videoFile);
    }
  };

  return (
    <div>
      <div className="videos-container">
        <h2>Upload a Video</h2>
        <form onSubmit={handleUploadVideo}>
          <label htmlFor="videoTitle">Video Title:</label>
          <input
            type="text"
            id="videoTitle"
            value={videoTitle}
            onChange={(e) => setVideoTitle(e.target.value)}
            required
          />

          <label htmlFor="videoDescription">Video Description:</label>
          <textarea
            id="videoDescription"
            value={videoDescription}
            onChange={(e) => setVideoDescription(e.target.value)}
            required
          ></textarea>

          <label htmlFor="videoFile">Choose a video file:</label>
          <input type="file" id="videoFile" accept="video/*" required />

          <button type="submit">Upload Video</button>
        </form>
      </div>

      <div className="video-details-container">
        {uploadedVideos.map((video, index) => (
          <div key={index} className="video-card">
            <h3>{video.title}</h3>
            <p>{video.description}</p>
            <p>Uploaded on: {video.uploadDateTime}</p>
            <video controls width="300" src={video.dataURL} type="video/mp4">
              Your browser does not support the video tag.
            </video>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideosComputerScience;
