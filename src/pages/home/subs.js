import React from 'react';
import Sidebar from '../../components/sideBarSubs';
import Navbar from '../../components/navbar';
import YouTubeCard from '../../components/cardVideo';


const channels = [
  { name: 'Dreams' },
  { name: 'Mr.Beast' },
];
const SubsPage = () => {
  //fetch a los canales a los cuales esta subscrito el usuario 
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
  return (
    <div className="w-full h-full">
      <Navbar />
      <Sidebar channels={channels} />
      <div className='relative w-full h-full pt-24 pl-56 bg-transparent text-white grid    sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3'>
        {videoList.map((value) => (
          <YouTubeCard channelName={value.channelName} videoTitle={value.videoTitle} />
        ))}
      </div>
    </div>
  );
};

export default SubsPage;
