// PostForm.js
import React from 'react';

const PostForm = ({ onClose, onSubmit }) => {  // Accept onSubmit prop

  const handleSubmit = (event) => {
    event.preventDefault();
    const title = event.target.title.value;
    const content = event.target.content.value;
    const image = event.target.image.files[0];
    onSubmit(title, content, image);  // Call onSubmit with form data
    onClose();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="title" placeholder="Title" className="border p-2 rounded-lg mb-2 w-full" required />
      <textarea name="content" placeholder="Content" className="border p-2 rounded-lg w-full" rows="5" required></textarea>
      <input type="file" name="image" className="border p-2 rounded-lg w-full mb-2" accept="image/png, image/jpeg" required />
      <button type="submit" className="bg-blue-500 text-white rounded-lg p-2 mt-2">Submit</button>
    </form>
  );
};

export default PostForm;
