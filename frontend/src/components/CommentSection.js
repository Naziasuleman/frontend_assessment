// src/components/CommentSection.js
import React, { useState } from "react";

const CommentSection = () => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  const handleCommentSubmit = () => {
    if (newComment.trim() !== "") {
      setComments([...comments, newComment]);
      setNewComment("");
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold">Comments</h2>
      <div className="mt-4">
        <div className="mb-4">
          <textarea
            className="w-full p-2 border rounded"
            placeholder="Add a comment..."
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
          ></textarea>
        </div>
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          onClick={handleCommentSubmit}
        >
          Add Comment
        </button>
      </div>
      <div className="mt-4">
        {comments.map((comment, index) => (
          <div key={index} className="mb-2 p-2 border rounded">
            {comment}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommentSection;
