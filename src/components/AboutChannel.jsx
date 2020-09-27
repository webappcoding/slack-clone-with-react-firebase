import React from "react";
import { Link, X } from "react-feather";

const AboutChannel = () => {
  return (
    <div className="m-4 bg-orange-100 rounded relative p-4 flex">
      <div>
        <img
          src="https://a.slack-edge.com/bv1-8/sparkles-multi-0f13cf8.svg"
          alt="slack-about-chanel"
        />
      </div>
      <div className="flex-1 px-4 py-8">
        <h1 className="text-2xl">Lovely! You’ve sent your first message.</h1>
        <p className="text-md leading-5">
          In Slack, most conversations happen in channels like this one. When
          new teammates arrive, they can see older messages, so it’s easy to get
          up to speed.
        </p>
        <p className="text-md leading-3">Ready to add more teammates?</p>
        <div className="flex py-5 items-center">
          <a href="/#" className="text-blue-900 ">
            <Link size={18} /> Get a link to share
          </a>
          <a href="/#" className="text-blue-900 ml-5">
            <Link />
            Add a teamet
          </a>
        </div>
      </div>
      <div>
        <button className="hover:bg-gray-200 text-gray-900 focus:outline-none p-2 rounded ">
          <X size={20} />
        </button>
      </div>
    </div>
  );
};

export default AboutChannel;
