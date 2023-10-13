import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';

const LikeButton = () => {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);

  const handleLikeClick = () => {
    if (!liked) {
      setLiked(true);
      setLikeCount(likeCount + 1);
    } else {
      setLiked(false);
      setLikeCount(likeCount - 1);
    }
  };

  return (
    <div className='flex justify-center items-center'>
      <span className="mr-2 text-white">{likeCount}</span>
      <button
        className={`text-blue-500 hover:text-blue-700 focus:outline-none ${liked ? 'text-blue-700' : ''
          }`}
        onClick={handleLikeClick}
      >
        <FontAwesomeIcon icon={faThumbsUp} />
      </button>
    </div>
  );
};

export default LikeButton;
