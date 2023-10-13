import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function YouTubeCard({ videoThumbnail, videoTitle, channelName, videoId }) {
  const cardStyle = {
    maxWidth: '100%',
  };

  const imageStyle = {
    height: '150px', // Set a fixed height for the image
    width: '100%', // Allow the image to stretch to the full width of the card
    objectFit: 'cover', // Stretch and crop the image to fit the fixed height
  };

  return (
    <Link to={`/video/${videoId}`} style={{ textDecoration: 'none' }}>
      <div
        className="rounded overflow-hidden shadow-lg m-4 transform transition-transform duration-300 hover:-translate-y-2 bg-white"
        style={cardStyle}
      >
        <img
          style={imageStyle}
          src={videoThumbnail || "https://via.placeholder.com/1000"}
          alt="Video thumbnail"
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xs sm:text-base mb-2 truncate text-black" title={videoTitle}>
            {videoTitle}
          </div>
          <p className="text-gray-700 text-xs sm:text-sm">
            {channelName}
          </p>
        </div>
      </div>
    </Link>
  );
}

YouTubeCard.propTypes = {
  videoThumbnail: PropTypes.shape({
    width: PropTypes.number,
    url: PropTypes.string,
  }),
  videoTitle: PropTypes.string.isRequired,
  channelName: PropTypes.string.isRequired,
};

export default YouTubeCard;
