import React, { useRef } from 'react';

const Carousel = ({ title, images }) => {
  const carouselRef = useRef(null);

  const scroll = (direction) => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: direction === 'left' ? -250 : 250,
        behavior: 'smooth'
      });
    }
  }

  return (
    <div className="mt-8 relative">
      <h2 className="text-xl text-white ml-6 font-mono">{title}</h2>

      <div className="relative overflow-hidden rounded-md">
        <div
          onClick={() => scroll('left')}
          className="absolute top-0 bottom-0 left-0 w-10 sm:w-36 bg-gradient-to-r from-[#0d0d0d]  to-transparent z-10 cursor-pointer"
        ></div>

        <div className="flex overflow-x-auto space-x-6 p-2" ref={carouselRef}>
          {images.map((image, index) => (
            <img
              key={index}
              src={image || 'https://via.placeholder.com/150x150?text=Placeholder'}
              alt={`carousel-item-${index}`}
              className="w-44 h-64  rounded-md shadow-lg transform transition-transform duration-300 hover:scale-105 hover:brightness-110 opacity-80"
            />
          ))}
        </div>

        <div
          onClick={() => scroll('right')}
          className="absolute top-0 bottom-0 right-0 w-10 sm:w-36  bg-gradient-to-l from-[#0d0d0d] to-transparent z-10 cursor-pointer"
        ></div>
      </div>
    </div>
  );
}

export default Carousel;
