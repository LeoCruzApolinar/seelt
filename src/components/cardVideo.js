import React from 'react';
import PropTypes from 'prop-types';

function YouTubeCard({ videoThumbnail, videoTitle, channelName }) {
  return (
    <div
      className="max-w-sm rounded overflow-hidden shadow-lg m-4 transform transition-transform duration-300 hover:-translate-y-2 bg-white"
    >
      <img className="w-full" src={videoThumbnail || "https://via.placeholder.com/1000"} alt="Video thumbnail" />
      <div className="px-6 py-4">
        <div className="font-bold text-xs sm:text-base mb-2 truncate" style={{ maxWidth: '100%' }} title={videoTitle}>{videoTitle}</div>
        <p className="text-gray-700 text-xs sm:text-sm">
          {channelName}
        </p>
      </div>
    </div>
  );
}

YouTubeCard.propTypes = {
  videoThumbnail: PropTypes.string,
  videoTitle: PropTypes.string.isRequired,
  channelName: PropTypes.string.isRequired
};

export default YouTubeCard;
