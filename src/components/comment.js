// src/components/CommentSection.jsx
import React, { useState, useEffect } from "react";
import Comment from "./comments";
import NewCommentForm from "./newComment";

const CommentSection = () => {
  const [comments, setComments] = useState([
    // ejemplos
    { id: 1, author: "John Doe", text: "This is a comment" },
    { id: 2, author: "Jane Doe", text: "This is another comment" },
  ]);

  //api call aqui
  useEffect(() => {
    // TODO: Fetch data from API
    // setComments(fetchedData);
  }, []);

  const addComment = (text) => {
    // TODO: Send data to the server
    // Ejemplo hasta que se envie la data:
    setComments([...comments, { id: Math.random(), author: "New User", text }]);
  };

  return (
    <div className="p-4">
      <NewCommentForm addComment={addComment} />
      {comments.map(comment => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </div>
  );
};

export default CommentSection;
