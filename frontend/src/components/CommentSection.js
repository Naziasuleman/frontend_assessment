import React, { useState } from "react";
import user1 from "../images/user1.png";
import user2 from "../images/user2.png";
import user3 from "../images/user3.png";
import user4 from "../images/user4.png";
import Comment from "./Comment";
import CommentInput from "./CommentInput";

const CommentSection = () => {
  const [comments, setComments] = useState([]);
  const [commentText, setCommentText] = useState("");

  const addNewComment = (newComment) => {
    setComments([...comments, newComment]);
  };

  const handleCommentSubmit = () => {
    if (commentText.trim() !== "") {
      const newComment = {
        user: { name: "John Doe", image: user4 },
        text: commentText,
        isNew: true,
      };

      setComments([...comments, newComment]);
      setCommentText("");
    }
  };

  const handleCommentRemove = (index) => {
    const updatedComments = [...comments];
    updatedComments.splice(index, 1); // Remove the comment at the specified index
    setComments(updatedComments);
  };

  return (
    <div className="h-screen w-screen bg-bodybg relative">
      <div className="font-poppins tracking-wider text-left w-80 md:w-[654px] h-auto rounded-lg absolute left-1/2 top-9 transform -translate-x-1/2 flex flex-col gap-3">
        <h6 className="font-bold text-xl">Comments</h6>

        <Comment
          user={{ name: "Maria", image: user1 }}
          text="I was very glad to have you after such a long time. Can you plan a meetup? Maybe this weekend?"
        />
        <Comment
          user={{ name: "Alex Benjamin", image: user2 }}
          text="Home sweet home! I'm glad you are back. It's been two years, and I miss the football matches we have together. A lot has changed since you left. Let's meet at the ground tomorrow evening?"
        />
        <Comment
          user={{ name: "Tania", image: user3 }}
          text="Hey bud, welcome back to home. It's so long to see you back again. Would love to hear the traveling stories of yours. Your or my place?"
        />
        {/* new comment */}
        {comments.map((comment, index) => (
          <Comment
            key={index}
            user={comment.user}
            text={comment.text}
            isNew={comment.isNew}
            onRemove={() => handleCommentRemove(index)}
            addNewComment={addNewComment}
          />
        ))}
        {/* Comment input bar */}
        <div className="bg-white shadow-3xl p-3 gap-3">
          <CommentInput
            onSubmit={handleCommentSubmit}
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};

export default CommentSection;
