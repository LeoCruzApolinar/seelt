import React from 'react';
import Navbar from '../../components/navbar';
import MediaPlayer from '../../components/ReproductorTest';
import Tags from '../../components/tags';
import DescriptionComponent from '../../components/descriptionVideo';
import LikeButton from '../../components/likes';
import SubscribeButton from '../../components/subButton';
import YouTubeCard from '../../components/cardVideo';
import CommentSection from '../../components/comment';





const VideoPlayer = () => {
  const videoList = [
    {
      videoTitle: "Amazing Landscape Views",
      channelName: "Nature Explorer"
    },
    {
      videoTitle: "Top 10 React Tips",
      channelName: "Code Guru"
    },
    {
      videoTitle: "Easiest Vegan Recipes",
      channelName: "Healthy Eats"
    },
    {
      videoTitle: "Exploring Mars Rover Footage",
      channelName: "Space Enthusiast"
    },
    {
      videoTitle: "Meditation for Beginners",
      channelName: "Mindful Moments"
    },
    {
      videoTitle: "Best Books of 2023",
      channelName: "Bookworm Buddies"
    },
    {
      videoTitle: "A Tour of My Garden",
      channelName: "Green Thumbs"
    },
    {
      videoTitle: "How to Build a PC",
      channelName: "Techie Talks"
    },
    {
      videoTitle: "Learning Spanish: Episode 5",
      channelName: "Language Lovers"
    },
    {
      videoTitle: "DIY Home Decor Ideas",
      channelName: "Crafty Creations"
    }
  ];

  const videoDatos = {
    title: "Contador super especial!!! wao!!",
    autor: "Johan Contreras",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium."
  }

  const tags = ["fortnite", "reactjs", "gameplay", "auronplay", "amongUs", "like"]

  const url = 'https://devstreaming-cdn.apple.com/videos/streaming/examples/img_bipbop_adv_example_fmp4/master.m3u8';

  return (
    <div className="h-full w-full bg-[#0d0d0d] flex flex-col md:flex-row p-5">
      <Navbar />
      <div className="flex w-full">
        <div className='relative flex flex-grow flex-col pt-20'>
          <MediaPlayer url={url} />
          <div className='flex w-full flex-col md:flex-row'>
            <div className='flex w-full flex-col'>
              <h1 className='text-white font-mono text-xl  xl:text-2xl mb-2'>{videoDatos.title}</h1>
              <div className="flex flex-row items-center space-x-4">
                <div className='text-xs sm:text-base w-12 h-12 rounded-full text-white bg-[#484848]'></div>
                <div className='text-xl font-bold text-white font-mono'>{videoDatos.autor}</div>
              </div>
              <div className='my-4 w-56 grid grid-flow-col gap-1'>
                {tags.map((value, index) =>
                  <Tags label={value} />
                )}
              </div>
            </div>
            <div className='w-1/4 '>
              {/*likes and subscribe button here */}
              <div className='ml-10 sm:ml-2 flex my-2 space-x-4 justify-center items-center'>
                <LikeButton />
                <SubscribeButton />
              </div>

            </div>

          </div>
          <DescriptionComponent descriptionText={videoDatos.description} />
          <CommentSection />
        </div>
      </div>
      <div className='relative pt-20 w-full md:w-1/2 grid grid-cols-2 md:grid-cols-1 xl:grid-cols-2 gap-1 '>
        {videoList.map((video, index) => (
          <YouTubeCard
            key={index}
            videoTitle={video.videoTitle}
            channelName={video.channelName}
          />
        ))}
      </div>
    </div>
  );
}

export default VideoPlayer;
