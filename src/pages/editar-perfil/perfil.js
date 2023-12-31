import React, { useState, useEffect } from 'react';
import Navbar from '../../components/navbar';
import YouTubeCard from '../../components/cardVideo'
import styles from './CrearCanal.module.css';
import Modal from '../../components/modal';
import PostCard from '../../components/post';
import PostForm from '../../components/postForm';
import VideoForm from '../../components/videoForm';
import { useParams } from 'react-router-dom';


const Perfil = ({ isPreviewMode, channelData }) => {
  const { uid } = useParams();
  const [isVideoActive, setIsVideoActive] = useState(true);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);  // State to control modal visibility
  const [videoList, setVideoList] = useState([
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
    // ... rest of your video data ...
  ]);
  const [postList, setPostList] = useState([  // Manage postList with useState

    {
      author: { name: 'Nature Explorer', profilePic: 'https://placekitten.com/50/50' },
      message: 'Exploring the great outdoors!',
      imageUrl: 'https://placekitten.com/1000/800'
    },
    {
      author: { name: 'Code Guru', profilePic: 'https://placekitten.com/51/51' },
      message: 'Sharing my top 10 coding tips.',
      imageUrl: 'https://placekitten.com/1001/801'
    },
    {
      author: { name: 'Healthy Eats', profilePic: 'https://placekitten.com/52/52' },
      message: 'Whipping up some delicious vegan recipes.',
      imageUrl: 'https://placekitten.com/1002/802'
    },
    {
      author: { name: 'Space Enthusiast', profilePic: 'https://placekitten.com/53/53' },
      message: 'Stargazing in the countryside.',
      imageUrl: 'https://placekitten.com/1003/803'
    },
    {
      author: { name: 'Mindful Moments', profilePic: 'https://placekitten.com/54/54' },
      message: 'Exploring the benefits of daily meditation.',
      imageUrl: 'https://placekitten.com/1004/804'
    },
    {
      author: { name: 'Bookworm Buddies', profilePic: 'https://placekitten.com/55/55' },
      message: 'Diving into the best books of 2023.',
      imageUrl: 'https://placekitten.com/1005/805'
    },
    {
      author: { name: 'Green Thumbs', profilePic: 'https://placekitten.com/56/56' },
      message: 'A tour of my beautiful garden.',
      imageUrl: 'https://placekitten.com/1006/806'
    },
    {
      author: { name: 'Techie Talks', profilePic: 'https://placekitten.com/57/57' },
      message: 'Building a PC from scratch.',
      imageUrl: 'https://placekitten.com/1007/807'
    },
    {
      author: { name: 'Language Lovers', profilePic: 'https://placekitten.com/58/58' },
      message: 'Learning Spanish: Episode 5.',
      imageUrl: 'https://placekitten.com/1008/808'
    },
    {
      author: { name: 'Crafty Creations', profilePic: 'https://placekitten.com/59/59' },
      message: 'DIY Home Decor Ideas.',
      imageUrl: 'https://placekitten.com/1009/809'
    }
  ]);

  //fetch para obtener los datos de los post: 

  const [dataChannel, setChannelData] = useState(null);

  useEffect(() => {
    // Replace the URL with your actual endpoint
    const apiUrl = `https://seeltapi20231013140255.azurewebsites.net/ObtenerCanalPorIdUsuario?UID=${uid}`;

    fetch(apiUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok: ' + response.statusText);
        }
        return response.json();
      })
      .then(data => {
        setChannelData(data);
        setLoading(false); // Set loading to false once the data is fetched
      })
      .catch(err => {
        setError(err);
        setLoading(false); // Even in case of an error, set loading to false
      });
  }, [uid]);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  //Fetch para subir lso datos seria asi:

  /*
        const handleFormSubmit = (title, content, image) => {
          const newPost = {
            author: { name: 'Your Name', profilePic: 'https://placekitten.com/50/50' },
            message: `${title} - ${content}`,
            imageUrl: URL.createObjectURL(image)
          };
          //fetch para subir post
          fetch('https://your-api-url.com/posts', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(newPost),
          })
            .then(response => response.json())
            .then(data => {
              setPostList([data, ...postList]);  // Update postList with new post
              setIsModalOpen(false);  // Close modal
            })
            .catch((error) => {
              console.error('Error:', error);
            });
            };*/

  const handleFormSubmit = (title, description, file, thumbnailFile, audioFile, subtitleFile, tags, videoType) => {
    if (isVideoActive) {
      const newVideo = {
        channelName: "new chanel",
        videoTitle: title,
        description: description,
        videoFile: file instanceof File ? URL.createObjectURL(file) : null,
        videoThumbnail: thumbnailFile instanceof File ? URL.createObjectURL(thumbnailFile) : null,
        audioFile: audioFile instanceof File ? URL.createObjectURL(audioFile) : null,
        subtitleFile: subtitleFile instanceof File ? URL.createObjectURL(subtitleFile) : null,
        tags: tags,
        type: videoType
      };
      setVideoList([newVideo, ...videoList]);  // Update videoList with new video
      console.log(newVideo)
    } else {
      const newPost = {
        author: { name: 'Your Name', profilePic: 'https://placekitten.com/50/50' },
        message: `${title} - ${description}`,
        imageUrl: URL.createObjectURL(file)
      };
      setPostList([newPost, ...postList]);  // Update postList with new post
    }
    setIsModalOpen(false);  // Close modal
  };

  return (
    <div className={`w-full h-full bg-[#0d0d0d] pt-20 ${isPreviewMode ? styles.nonInteractive : ''}`}>
      <Navbar />
      <div className="relative">
        {/* Banner Image */}
        <div className="w-full h-60 bg-cover bg-center"
          style={{
            backgroundImage: isPreviewMode
              ? (channelData && channelData.fotoP
                ? `url(${URL.createObjectURL(channelData.fotoP)})`
                : 'url(https://placeholder.com/1000/1000)')
              : (dataChannel && dataChannel.FOTO_PORTADA
                ? `url(${dataChannel.FOTO_PORTADA})`
                : 'url(https://placeholder.com/1000/1000)')
          }}
        ></div>
        {/* Profile Image`*/}
        <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 w-32 h-32 rounded-full bg-cover bg-center border-4 border-white"
          style={{
            backgroundImage: isPreviewMode
              ? (channelData && channelData.fotoL
                ? `url(${URL.createObjectURL(channelData.fotoL)})`
                : 'url(https://placeholder.com/1000x1000)')
              : (dataChannel && dataChannel.FOTO_LOGO
                ? `url(${dataChannel.FOTO_LOGO})`
                : 'url(https://placeholder.com/1000x1000)')
          }}
        ></div>
      </div>
      {/* Channel Name */}
      <div className="mt-14 mb-8 text-center">
        <h1 className="text-3xl font-bold font-mono text-white">
          {isPreviewMode
            ? (channelData.nombre ? channelData.nombre : "Nombre del canal!!")
            : dataChannel && <h1>{dataChannel.NOMBRE}</h1>}
        </h1>
      </div>
      {/* Channel Description */}
      <div className="mt-14 mb-8 text-center">
        <h1 className="text-sm font-bold font-mono text-white">
          {isPreviewMode
            ? (channelData.Descripcion ? channelData.Descripcion : "Descripción del canal!!")
            : dataChannel && <h1>{dataChannel.DESCRIPCION}</h1>}
        </h1>
      </div>

      {/* Double Button */}
      <div className="flex justify-center mx-4 my-4">
        <div className="flex ml-auto pl-24">
          <button
            onClick={() => setIsVideoActive(true)}
            className={`px-4 py-2 rounded-l-lg ${isVideoActive ? 'bg-white text-black' : 'bg-black text-white'}`}
          >
            Videos
          </button>
          <button
            onClick={() => setIsVideoActive(false)}
            className={`px-4 py-2 rounded-r-lg ${isVideoActive ? 'bg-black text-white' : 'bg-white text-black'}`}
          >
            Posts
          </button>
        </div>
        <div className="ml-auto">
          <button
            onClick={handleOpenModal}  // Open modal when clicked
            className={`px-4 py-2 rounded-lg ${isVideoActive ? 'bg-black text-white' : 'bg-white text-black'}`}
          >
            {isVideoActive ? 'New Video' : 'New Post'}
          </button>
          <Modal isOpen={isModalOpen} onClose={handleCloseModal} onSubmit={handleFormSubmit}>
            {/* Conditionally render VideoForm or PostForm based on isVideoActive */}
            {isVideoActive ? <VideoForm onClose={handleCloseModal} onSubmit={handleFormSubmit} canal={dataChannel.NOMBRE} /> : <PostForm onClose={handleCloseModal} onSubmit={handleFormSubmit} />}
          </Modal>
        </div>
      </div>

      {/* Conditionally render content based on active tab */}
      {isVideoActive ? (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
          {videoList.map((video, index) => (
            <YouTubeCard key={index} channelName={video.channelName} videoTitle={video.videoTitle} videoThumbnail={video.videoThumbnail} />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-20 p-4">
          {postList.map((post, index) => (
            <PostCard key={index} {...post} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Perfil;
