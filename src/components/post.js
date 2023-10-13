import React from 'react';
import LikeButton from './likes';
import CommentSection from './comment';

const PostCard = ({ author, message, imageUrl = 'https://placehold.it/400x300' }) => {
  return (
    <div className="bg-transparent border borded-solid border-white p-4 rounded-lg shadow-lg mb-4">
      <div className="flex items-center mb-2">
        <img src={author.profilePic} alt="Author's profile" className="w-8 h-8 rounded-full mr-2" />
        <span className="font-bold text-sm text-white">{author.name}</span>
      </div>
      <p className=" mb-2 text-white">{message}</p>
      <div className="post-image mb-2">
        <img src={imageUrl} alt="Post content" className="rounded-lg w-full" />
      </div>
      <LikeButton />
      <CommentSection />
    </div>
  );
};

export default PostCard;
