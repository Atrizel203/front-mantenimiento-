import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faAddressBook } from '@fortawesome/free-solid-svg-icons';
import '../App.css';

function Content() {
  const [showVideo, setShowVideo] = useState(false);
  const [videoUrl, setVideoUrl] = useState('https://www.youtube.com/watch?v=RsqhfANMmh0');

  const convertToEmbedUrl = (url) => {
    try {
      if (url.includes('youtube.com/watch?v=')) {
        const videoId = url.split('v=')[1]?.split('&')[0];
        if (videoId) {
          return `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`;
        }
      } else if (url.includes('youtube.com/embed/')) {
        return url.includes('?') ? `${url}&autoplay=1&rel=0&modestbranding=1` : `${url}?autoplay=1&rel=0&modestbranding=1`;
      }
      return url;
    } catch (error) {
      console.error('Error converting URL:', error);
      return url;
    }
  };

  const handleMonitorClick = () => {
    setShowVideo(prev => !prev);
  };

  return (
    <div className="content-container">
      <div className="video-container">
        {showVideo && (
          <div className="video-wrapper">
            <iframe
              src={convertToEmbedUrl(videoUrl)}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="youtube-video"
            />
          </div>
        )}
      </div>

      <div className="icon-container">
        <div
          className="icon-link"
          onClick={handleMonitorClick}
        >
          <div className="icon">
            <FontAwesomeIcon icon={faAddressBook} size="3x" />
            <p>MONITOREAR</p>
          </div>
        </div>

        <div className="icon-link">
          <div className="icon">
            <FontAwesomeIcon icon={faPhone} size="3x" />
            <p>HABLAR</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;
