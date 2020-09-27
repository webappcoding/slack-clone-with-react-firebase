import React from "react";
import { Info, Star } from "react-feather";

const MessageHeading = () => {
  return (
    <div className="border-b border-t border-gray-400 h-16 px-4 flex items-center justify-between">
      <div className="flex justify-around">
        <h3>Web App Coding</h3>
        <Star size={18} />
      </div>
      <button className="p-2 focus:outline-none hover:bg-gray-200 rounded">
        <Info size={20} />
      </button>
    </div>
  );
};

export default MessageHeading;
