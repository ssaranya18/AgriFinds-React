import React, { useState } from 'react';
import './VideoTutorials.css';

const VideoTutorials = () => {
  window.scroll(0,0);
  const [activeVideo, setActiveVideo] = useState(null);

  const onVideoPlay = (videoId) => {
    
    if (activeVideo && activeVideo !== videoId) {
      document.getElementById(activeVideo).contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
    }
    
    setActiveVideo(videoId);
  };

  return (
    <div className="video-tutorials-page">
      <h2>Planting Video Tutorials</h2>
      <div className="video-container">
        
        <div className="video-item">
          <h3>How to Plant Tomatoes</h3>
          <iframe
            id="Zj-pLI1mISo"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/Zj-pLI1mISo?enablejsapi=1"
            title="How to Plant Tomatoes"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            onLoad={() => onVideoPlay('Zj-pLI1mISo')}
          ></iframe>
        </div>

        {/* Tutorial 2 */}
        <div className="video-item">
          <h3>Beginner's Guide to Vegetable Gardening</h3>
          <iframe
            id="naccFoNDV88"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/naccFoNDV88?enablejsapi=1"
            title="Beginner's Guide to Vegetable Gardening"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            onLoad={() => onVideoPlay('naccFoNDV88')}
          ></iframe>
        </div>

        {/* Tutorial 3 */}
        <div className="video-item">
          <h3>Best Practices for Growing Carrots</h3>
          <iframe
            id="2CXkFPoExow"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/2CXkFPoExow?enablejsapi=1"
            title="Best Practices for Growing Carrots"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            onLoad={() => onVideoPlay('2CXkFPoExow')}
          ></iframe>
        </div>

        {/* Tutorial 4 */}
        <div className="video-item">
          <h3>Tips for Growing Lettuce</h3>
          <iframe
            id="PWlbV3Wx5BM"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/PWlbV3Wx5BM?enablejsapi=1"
            title="Tips for Growing Lettuce"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            onLoad={() => onVideoPlay('PWlbV3Wx5BM')}
          ></iframe>
        </div>

        {/* Tutorial 5 */}
        <div className="video-item">
          <h3>Planting and Growing Potatoes</h3>
          <iframe
            id="0R-TPasXZI0"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/0R-TPasXZI0?enablejsapi=1"
            title="Planting and Growing Potatoes"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            onLoad={() => onVideoPlay('0R-TPasXZI0')}
          ></iframe>
        </div>

        {/* Tutorial 6 */}
        <div className="video-item">
          <h3>How to Grow Peppers</h3>
          <iframe
            id="2KTIJJgflOI"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/2KTIJJgflOI?enablejsapi=1"
            title="How to Grow Peppers"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            onLoad={() => onVideoPlay('2KTIJJgflOI')}
          ></iframe>
        </div>

        {/* Tutorial 7 */}
        <div className="video-item">
          <h3>Growing Strawberries: A Complete Guide</h3>
          <iframe
            id="oaXYBunuGXA"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/oaXYBunuGXA?enablejsapi=1"
            title="Growing Strawberries: A Complete Guide"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            onLoad={() => onVideoPlay('oaXYBunuGXA')}
          ></iframe>
        </div>

        {/* Tutorial 8 */}
        <div className="video-item">
          <h3>Advanced Techniques for Growing Corn</h3>
          <iframe
            id="7ri-_3U7HMo"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/7ri-_3U7HMo?enablejsapi=1"
            title="Advanced Techniques for Growing Corn"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            onLoad={() => onVideoPlay('7ri-_3U7HMo')}
          ></iframe>
        </div>

        {/* Tutorial 9 */}
        <div className="video-item">
          <h3>How to Plant Onions</h3>
          <iframe
            id="5jI7hFc5CdQ"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/5jI7hFc5CdQ?enablejsapi=1"
            title="How to Plant Onions"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            onLoad={() => onVideoPlay('5jI7hFc5CdQ')}
          ></iframe>
        </div>

        {/* Tutorial 10 */}
        <div className="video-item">
          <h3>Growing Cucumbers: Tips and Tricks</h3>
          <iframe
            id="pxd4VgCeM3g"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/pxd4VgCeM3g?enablejsapi=1"
            title="Growing Cucumbers: Tips and Tricks"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            onLoad={() => onVideoPlay('pxd4VgCeM3g')}
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default VideoTutorials;
