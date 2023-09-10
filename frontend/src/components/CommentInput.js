import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

const CommentInput = ({ onSubmit, value, onChange }) => {
  return (
    <div className="relative">
      <input
        type="text"
        className="bg-inputbg h-11 w-full  p-3 rounded-[5px] placeholder-gray font-light text-sm tracking-wider"
        placeholder="Write Your Comment"
        onChange={onChange}
        value={value}
      />
      <div
        className="absolute top-0 right-0 h-full flex items-center pr-3"
        onClick={onSubmit}
      >
        <FontAwesomeIcon icon={faPaperPlane} className="text-blue w-4 h-4" />
      </div>
    </div>
  );
};

export default CommentInput;
