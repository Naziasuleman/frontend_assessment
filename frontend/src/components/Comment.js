import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as faHeartEmpty } from "@fortawesome/free-regular-svg-icons";
import user4 from "../images/user4.png";
import CommentInput from "./CommentInput";

const Comment = ({ user, text, isNew, onRemove }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);
  const [showReplyInput, setShowReplyInput] = useState(false);
  const [replyText, setReplyText] = useState("");
  const [replyTexts, setReplyTexts] = useState([]);
  const [showNewComment, setShowNewComment] = useState(false);
  const [isLikedInner, setIsLikedInner] = useState(false);
  const [likeCountInner, setLikeCountInner] = useState(0);

  const handleLikeClick = () => {
    setIsLiked(!isLiked);
    setLikeCount(isLiked ? likeCount - 1 : likeCount + 1);
  };

  const handleLikeClickInner = () => {
    setIsLikedInner(!isLikedInner);
    setLikeCountInner(isLikedInner ? likeCountInner - 1 : likeCountInner + 1);
  };

  const handleReplyClick = () => {
    setShowReplyInput(!showReplyInput);
  };

  const handleRemoveClick = () => {
    if (onRemove) {
      onRemove();
    }
    setShowNewComment(false);
    setReplyTexts([]);
  };

  const handleReplySubmit = () => {
    if (replyText.trim() !== "") {
      setReplyText("");
      setReplyTexts([...replyTexts, replyText]);
      setShowNewComment(true);
    }
  };

  return (
    <div className="bg-white shadow-3xl p-3 flex gap-3">
      <img
        className="w-9 h-9 rounded-full"
        src={user.image}
        alt="user profile"
      />
      <div className="text-sm h-auto w-80 md:w-[584px] flex flex-col gap-1">
        <p className="font-medium flex gap-2.5">
          {user.name}
          {isNew && (
            <span className="text-xs pl-1 pr-1 h-3.5 w-6 bg-lightpurple bg-opacity-10 text-purple rounded-sm">
              ME
            </span>
          )}
        </p>
        <p className="font-light text-gray">{text}</p>
        <div className="w-28 h-7 pt-2 flex gap-4 items-center justify-between">
          <button className="w-7 h-5 flex gap-1" onClick={handleLikeClick}>
            {isLiked ? (
              <FontAwesomeIcon icon={faHeart} className="text-red w-5 h-5" />
            ) : (
              <FontAwesomeIcon
                icon={faHeartEmpty}
                className="text-grayest w-5 h-5"
              />
            )}
            <p className="font-light text-lightgray">{likeCount}</p>
          </button>
          <div className="w-1 h-1 rounded-full bg-gray pl-1" />
          {isNew ? (
            <button
              className="text-red font-medium"
              onClick={handleRemoveClick}
            >
              Remove
            </button>
          ) : (
            <button
              className="text-blue font-medium"
              onClick={handleReplyClick}
            >
              Reply
            </button>
          )}
        </div>
        {showNewComment && (
          <div className=" w-56 md:w-[584px] p-3 flex gap-3 mt-3">
            <img
              className="w-9 h-9 rounded-full"
              src={user4}
              alt="user profile"
            />
            <div className="text-sm h-auto  flex flex-col gap-1">
              <p className="font-medium flex gap-2.5">
                John Doe
                <span className="text-xs pl-1 pr-1 h-3.5 w-6 bg-lightpurple bg-opacity-10 text-purple rounded-sm">
                  ME
                </span>
              </p>

              {replyTexts.map((reply, index) => (
                <p key={index} className="text-gray font-light">
                  {reply}
                </p>
              ))}

              <div className="w-28 h-7 pt-2 flex gap-4 items-center justify-between">
                <button
                  className="w-7 h-5 flex gap-1"
                  onClick={handleLikeClickInner}
                >
                  {isLikedInner ? (
                    <FontAwesomeIcon
                      icon={faHeart}
                      className="text-red w-5 h-5"
                    />
                  ) : (
                    <FontAwesomeIcon
                      icon={faHeartEmpty}
                      className="text-grayest w-5 h-5"
                    />
                  )}
                  <p className="font-light text-lightgray">{likeCountInner}</p>
                </button>
                <div className="w-1 h-1 rounded-full bg-gray pr-1" />
                <button
                  className="text-red font-medium"
                  onClick={handleRemoveClick}
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        )}

        <div className="pt-4">
          {showReplyInput && (
            <CommentInput
              onSubmit={handleReplySubmit}
              value={replyText}
              onChange={(e) => setReplyText(e.target.value)}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Comment;
