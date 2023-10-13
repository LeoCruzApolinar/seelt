
import React from "react";

const Comment = ({ comment }) => {
  return (
    <div className="flex items-start mt-4">
      <img src="https://via.placeholder.com/40" alt="Avatar" className="rounded-full mr-4" />
      <div className="flex flex-col">
        <span className="font-bold text-white">{comment.author}</span>
        <span className="text-white">{comment.text}</span>
      </div>
    </div>
  );
};

export default Comment;
