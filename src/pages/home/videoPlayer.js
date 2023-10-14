import React, { useState, useEffect } from 'react';
import videoData from '../../components/videosDataExample';
import Navbar from '../../components/navbar';
import MediaPlayer from '../../components/ReproductorTest';
import Tags from '../../components/tags';
import DescriptionComponent from '../../components/descriptionVideo';
import LikeButton from '../../components/likes';
import SubscribeButton from '../../components/subButton';
import YouTubeCard from '../../components/cardVideo';
import CommentSection from '../../components/comment';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';





const VideoPlayer = () => {
  const navigate = useNavigate();

  const { videoId } = useParams();
  const [currentVideo, setCurrentVideo] = useState(null);

  useEffect(() => {
    const video = videoData.find((v) => v.id === videoId);
    setCurrentVideo(video);
  }, [videoId]);

  const tags = ["fortnite", "reactjs", "gameplay", "auronplay", "amongUs", "like"]


  if (!currentVideo) return null;

  return (
    <div className="h-full w-full bg-[#0d0d0d] flex flex-col md:flex-row p-5">
      <Navbar />
      <div className="flex w-full">
        <div className='relative flex flex-grow flex-col pt-20'>
          <MediaPlayer url={currentVideo.videoFile} />
          <div className='flex w-full flex-col md:flex-row'>
            <div className='flex w-full flex-col'>
              <h1 className='text-white font-mono text-xl  xl:text-2xl mb-2'>{currentVideo.videoTitle}</h1>
              <div className="flex flex-row items-center space-x-4">
                <div className='text-xs sm:text-base w-12 h-12 rounded-full text-white bg-[#484848]'></div>
                <div className='text-xl font-bold text-white font-mono'>{currentVideo.channelName}</div>
              </div>
              <div className='my-4 w-56 grid grid-flow-col gap-1'>
                {tags.map((value, index) =>
                  <Tags label={value} />
                )}
              </div>
            </div>
            <div className='w-1/4 '>
              <div className='ml-10 sm:ml-2 flex my-2 space-x-4 justify-center items-center'>
                <LikeButton />
                <SubscribeButton />
              </div>

            </div>

          </div>
          <DescriptionComponent descriptionText={currentVideo.description} />
          <CommentSection />
        </div>
      </div>
      <div className='relative pt-20 w-full md:w-1/2 grid grid-cols-2 md:grid-cols-1 xl:grid-cols-2 gap-1 '>
        {videoData.map((video) => (
          <YouTubeCard
            key={video.id}
            videoTitle={video.videoTitle}
            channelName={video.channelName}
            videoId={video.id}
            onClick={() => {
              navigate(`/video/${video.id}`);
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default VideoPlayer;
