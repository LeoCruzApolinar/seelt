import React from 'react';

const Sidebar = ({ channels }) => {
  return (
    <div className="absolute top-0 left-0 w-44 h-full p-4 pt-24 bg-black">
      <h1 className="text-xl font-bold mb-4 text-white font-mono">Subscriptions</h1>
      <ul>
        {channels.map((channel, index) => (
          <li key={index} className="flex items-center mb-2">
            <div className="w-10 h-10 rounded-full bg-gray-300 mr-4">
              <img src="https://via.placeholder.com/48" alt={`${channel.name} avatar`} className="rounded-full" />
            </div>
            <span className="text-white font-mono">{channel.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
