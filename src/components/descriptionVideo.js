import React, { useState } from 'react';

const DescriptionComponent = ({ descriptionText }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleDescription = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div>
      <div className={`text-white text-xs sm:text-sm font-mono ${isExpanded ? 'block' : 'truncate'}`}>
        {isExpanded ? descriptionText : descriptionText.slice(0, 40) + '...'}
      </div>
      <button
        className='text-white text-xs'
        onClick={toggleDescription}
      >
        {isExpanded ? 'Less... ' : 'More...'}
      </button>
    </div>
  );
};

export default DescriptionComponent;
