// src/components/NewCommentForm.jsx
import React, { useState } from "react";

const NewCommentForm = ({ addComment }) => {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      addComment(text);
      setText("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4">
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a comment..."
        className="w-full bg-transparent p-2 border rounded text-white"
      />
      <button type="submit" className="mt-2 px-4 py-2 bg-[#0196ea] text-white rounded hover:bg-blue-700 transition">
        Submit
      </button>
    </form>
  );
};

export default NewCommentForm;
