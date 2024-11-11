import React, { useState, useEffect } from 'react';
import './VideoTutorials.css';

const VideoTutorials = () => {
  window.scroll(0, 0);

  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [activeVideo, setActiveVideo] = useState(null);  // State to track active video
  const [isVideoPlaying, setIsVideoPlaying] = useState(false); // State to track if video is playing

  const videoDetails = [
    {
      id: 'Zj-pLI1mISo',
      title: 'How to Plant Tomatoes',
      description: 'Learn the essential steps for planting tomatoes, from selecting the right seeds to caring for the plants throughout their growth stages.',
      src: 'https://www.youtube.com/embed/Zj-pLI1mISo?enablejsapi=1'
    },
    {
      id: 'naccFoNDV88',
      title: 'Beginner\'s Guide to Vegetable Gardening',
      description: 'A comprehensive guide for beginners, covering basic vegetable gardening techniques and tips for success.',
      src: 'https://www.youtube.com/embed/naccFoNDV88?enablejsapi=1'
    },
    {
      id: '2CXkFPoExow',
      title: 'Best Practices for Growing Carrots',
      description: 'Explore the best practices for growing carrots, including soil preparation, planting, and maintenance tips.',
      src: 'https://www.youtube.com/embed/2CXkFPoExow?enablejsapi=1'
    },
    {
      id: 'PWlbV3Wx5BM',
      title: 'Tips for Growing Lettuce',
      description: 'Learn expert tips for growing lettuce, including soil conditions, watering, and how to prevent common pests.',
      src: 'https://www.youtube.com/embed/PWlbV3Wx5BM?enablejsapi=1'
    },
    {
      id: '0R-TPasXZI0',
      title: 'Planting and Growing Potatoes',
      description: 'Discover the process of planting and growing potatoes, from choosing seed potatoes to harvesting.',
      src: 'https://www.youtube.com/embed/0R-TPasXZI0?enablejsapi=1'
    },
    {
      id: '2KTIJJgflOI',
      title: 'How to Grow Peppers',
      description: 'This video covers everything you need to know about growing peppers, including climate requirements and harvesting techniques.',
      src: 'https://www.youtube.com/embed/2KTIJJgflOI?enablejsapi=1'
    },
    {
      id: 'oaXYBunuGXA',
      title: 'Growing Strawberries: A Complete Guide',
      description: 'Master the art of strawberry cultivation with a step-by-step guide on planting, maintenance, and harvesting.',
      src: 'https://www.youtube.com/embed/oaXYBunuGXA?enablejsapi=1'
    },
    {
      id: '7ri-_3U7HMo',
      title: 'Advanced Techniques for Growing Corn',
      description: 'Take your corn-growing skills to the next level with advanced techniques for maximizing yield and quality.',
      src: 'https://www.youtube.com/embed/7ri-_3U7HMo?enablejsapi=1'
    },
    {
      id: '5jI7hFc5CdQ',
      title: 'How to Plant Onions',
      description: 'Learn how to plant onions properly, with advice on spacing, soil conditions, and common mistakes to avoid.',
      src: 'https://www.youtube.com/embed/5jI7hFc5CdQ?enablejsapi=1'
    },
    {
      id: 'pxd4VgCeM3g',
      title: 'Growing Cucumbers: Tips and Tricks',
      description: 'Get expert tips on growing cucumbers, including how to handle pests and the best growing methods for optimal results.',
      src: 'https://www.youtube.com/embed/pxd4VgCeM3g?enablejsapi=1'
    }
  ];

  const nextVideo = () => {
    if (!isVideoPlaying) {
      setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videoDetails.length);
    }
  };

  const prevVideo = () => {
    if (!isVideoPlaying) {
      setCurrentVideoIndex((prevIndex) => (prevIndex - 1 + videoDetails.length) % videoDetails.length);
    }
  };

  const handleVideoClick = (videoId) => {
    setActiveVideo(`https://www.youtube.com/embed/${videoId}?autoplay=1`);
    setIsVideoPlaying(true); // Set video playing state to true
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextVideo();
    }, 5000); // Change video every 5 seconds, but only if no video is playing

    return () => clearInterval(interval); // Clear the interval on unmount
  }, [isVideoPlaying]); // Add isVideoPlaying as a dependency to prevent scrolling during video play

  return (
    <div className="video-tutorials-page">
      <h2 className="page-titlev">Planting Video Tutorials</h2>
      <div className="carousel-container">
        <div className="carousel-button prev" onClick={prevVideo}>❮</div>
        <div className="carousel-video-container">
          {/* Display 3 videos at a time */}
          <div className="carousel-background"></div>
          {videoDetails.slice(currentVideoIndex, currentVideoIndex + 3).map((video, index) => (
            <div
              className="carousel-video"
              key={video.id}
              onClick={() => handleVideoClick(video.id)} // Add click handler to play video
            >
              <iframe
                id={video.id}
                src={activeVideo && activeVideo.includes(video.id) ? activeVideo : video.src} // Use autoplay video when clicked
                title={video.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <div className="video-details">
                <h3>{video.title}</h3>
                <p>{video.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="carousel-button next" onClick={nextVideo}>❯</div>
      </div>
    </div>
  );
};

export default VideoTutorials;
