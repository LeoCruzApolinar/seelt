import React, { useState, useEffect } from 'react';

const Tags = ({ label }) => {

  const [color, setColor] = useState('');

  useEffect(() => {
    setColor(generatePastelColor());
  }, []);

  const generatePastelColor = () => {
    const baseRed = 255;
    const baseGreen = 255;
    const baseBlue = 255;

    const red = Math.floor((Math.random() + 0.5) * baseRed / 2);
    const green = Math.floor((Math.random() + 0.5) * baseGreen / 2);
    const blue = Math.floor((Math.random() + 0.5) * baseBlue / 2);

    return `rgb(${red}, ${green}, ${blue})`;
  };

  return (
    <div style={{ backgroundColor: 'transparent', borderColor: color, color: color }} className="py-1 px-2 rounded-md text-[10px] border border-solid w-fit">
      {label}
    </div>
  );
};

export default Tags;
