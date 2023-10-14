import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Navbar from '../../components/navbar';
import YouTubeCard from '../../components/cardVideo';
import videoData from '../../components/videosDataExample';

const AllVideos = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const categoria = query.get('categoria');

  const [visibleVideos, setVisibleVideos] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(20);

  const filteredVideos = videoData.filter(video =>
    video.type.toLowerCase() === categoria.toLowerCase()
  );

  useEffect(() => {
    setVisibleVideos(filteredVideos.slice(0, currentIndex));
  }, [currentIndex, filteredVideos]);

  useEffect(() => {
    const loadMoreVideos = () => {
      if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight) return;
      setCurrentIndex(prevState => prevState + 20);
    };

    window.addEventListener('scroll', loadMoreVideos);
    return () => window.removeEventListener('scroll', loadMoreVideos);
  }, [currentIndex]);

  return (
    <div className="w-full h-full">
      <Navbar />
      <div className='relative w-full h-full pt-24 bg-transparent text-white grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3'>
        {visibleVideos.map((video) => (
          <YouTubeCard
            key={video.id}
            channelName={video.channelName}
            videoTitle={video.videoTitle}
            videoId={video.id}
            onClick={() => {
              navigate(`/video/${video.id}`);
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default AllVideos;
