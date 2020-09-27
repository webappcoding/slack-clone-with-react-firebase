import React from "react";
import { Send, Zap } from "react-feather";

const MessageInputBox = () => {
  return (
    <div className="p-4">
      <form action="#" className="relative">
        <textarea
          placeholder="Send a message to #general"
          className="focus:outline-none focus:shadow-none focus:border-gray-700 border border-gray-800 hover:border-gray-600 rounded  px-10 block w-full appearance-none leading-normal text-sm font-normal placeholder-gray-600 h-10 py-2"
        ></textarea>

        <button className="absolute left-0 top-0 p-1 mt-2 ml-2 focus:outline-none hover:bg-blue-900 text-gray-600 rounded border-r-2 hover:text-gray-100">
          <Zap size={18} />
        </button>
        <button className="absolute right-0 top-0 p-1 rounded mt-2 mr-2 focus:outline-none hover:bg-blue-900 hover:text-gray-100 text-gray-600 ">
          <Send size={18} transform="rotate(40)" />
        </button>
      </form>
    </div>
  );
};

export default MessageInputBox;
