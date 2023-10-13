import React from 'react';
import Navbar from '../../components/navbar';
import pelis from '../../images/coverInter.jpeg';
import series from '../../images/coverPeaky.jpeg';
import Carousel from '../../components/carrusel';

const MainPage = () => {
  const samplePelis = [pelis, pelis, pelis, pelis, pelis, pelis, pelis, pelis, pelis];
  const sampleSeries = [series, series, series, series, series, series, series, series, series];

  return (
    <div className="h-full w-full bg-[#0d0d0d] flex flex-col p-5">
      <Navbar />
      <div className="flex flex-grow flex-col items-center pt-20">
        <h1 className="z-10 text-4xl ml-6 text-white self-start transform transition-transform duration-300 hover:scale-110 cursor-pointer font-mono">TRENDING</h1>
        <Carousel title="Peliculas" images={samplePelis} />
        <Carousel title="Videos" images={sampleSeries} />
      </div>
    </div>
  );
}

export default MainPage;
