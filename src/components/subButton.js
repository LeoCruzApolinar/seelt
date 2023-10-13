import React, { useState } from 'react';

const SubscribeButton = () => {
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribeClick = () => {
    setSubscribed(!subscribed);
  };

  // Define class names based on the subscribed state
  const buttonClass = subscribed
    ? 'text-red-500 bg-white hover:bg-red-600'
    : 'text-white bg-red-500 hover:bg-red-600';

  return (
    <button
      className={`focus:outline-none rounded-full text-sm xl:text-base px-4 py-2 w-36 ${buttonClass}`}
      onClick={handleSubscribeClick}
    >
      {subscribed ? 'Subscribed' : 'Subscribe'}
    </button>
  );
};

export default SubscribeButton;
