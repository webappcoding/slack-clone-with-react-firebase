import React from "react";
import ClockIcon from "react-feather/dist/icons/clock";
import HelpCircleIcon from "react-feather/dist/icons/help-circle";
import UserIcon from "react-feather/dist/icons/user";
import SearchBox from "./SearchBox";

function Header() {
  return (
    <header className="bg-slack-900 text-gray-200 h-10  flex items-center">
      <div className="w-260 bg-gray-100 flex-none"></div>
      <div className="flex-1 flex items-center justify-between">
        <div className="flex-1 flex">
          <button className="p-1 focus:outline-none hover:bg-slack-800 rounded">
            <ClockIcon size={20} />
          </button>
          <SearchBox />
          <button className="p-1 focus:outline-none hover:bg-slack-800 rounded">
            <HelpCircleIcon size={20} />
          </button>
        </div>
        <div className="flex-1 flex flex-row-reverse pr-4">
          <button className="rounded bg-slack-light-400 p-1 focus:outline-none hover:bg-slack-light-500">
            <UserIcon size={24} />
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
