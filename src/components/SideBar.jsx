import React, { useState } from "react";

import EditIcon from "react-feather/dist/icons/edit";
import ChevronDown from "react-feather/dist/icons/chevron-down";
const SideBar = () => {
  const [room, setRoom] = useState("");
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className=" text-white bg-slack-light-900 border-t border-b border-slack-800 flex items-center h-16 px-4 justify-between cursor-pointer hover:bg-slack-900">
        <h4 className="text-sm inline-flex items-center">
          Web App Coding <ChevronDown size={16} className="ml-2" />
        </h4>
        <button className="p-2 focus:outline-none bg-gray-100 text-gray-900  rounded-full">
          <EditIcon size={18} />
        </button>
      </div>
      <div className="flex-1 overflow-y-auto text-gray-100 p-3">
        <button
          className="w-full bg-blue-800 rounded focus:outline-none hover:bg-blue-700 py-2"
          onClick={() => setOpen(!open)}
        >
          Add Channel
        </button>
        <form action="#" className={!open ? "hidden" : ""} autoComplete="off">
          <input
            className="focus:outline-none w-full rounded mt-2 p-2 text-black focus:border-blue-500 border"
            type="text"
            value={room}
            placeholder="Enter new channel..."
            autoFocus={true}
            onChange={(e) => setRoom(e.target.value)}
          />
        </form>

        <ul className="mt-2 flex flex-col ">
          <li>
            <a
              href="/room/823982193"
              className="block p-2 rounded hover:text-gray-300"
            >
              General
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default SideBar;
