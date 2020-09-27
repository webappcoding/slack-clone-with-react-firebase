import React from "react";
import { Search as SearchIcon } from "react-feather";
const SearchBox = () => {
  return (
    <div className="relative mx-4 flex-1">
      <input
        className="pl-8 bg-slack-light-900 focus:outline-none focus:shadow-none focus:border-slack-200 border-slack-300 hover:border-slack-200 border  rounded-lg h-8 px-4 block w-full appearance-none leading-normal text-sm font-normal placeholder-slack-200"
        type="text"
        placeholder="Searc here ..."
      ></input>
      <div className="absolute left-0 top-0 ml-2 my-2">
        <SearchIcon size={16} className="text-slack-200" />
      </div>
    </div>
  );
};

export default SearchBox;
