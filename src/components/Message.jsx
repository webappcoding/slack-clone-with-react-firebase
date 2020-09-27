import React from "react";
import User from "react-feather/dist/icons/user";

const Message = () => {
  return (
    <div className="hover:bg-gray-100 px-4 py-1 flex">
      <button className="bg-slack-200 p-2 text-slack-800 focus:outline-none rounded flex-none self-start">
        <User />
      </button>
      <div className="pl-3">
        <a
          href="/"
          onClick={(e) => e.preventDefault()}
          className="hover:underline text-black capitalize font-extrabold"
        >
          Web app coding
        </a>
        <span className="text-xs ml-2 text-gray-500">08:30</span>
        <p className="text-sm">Messages goes here</p>
      </div>
    </div>
  );
};

export default Message;
