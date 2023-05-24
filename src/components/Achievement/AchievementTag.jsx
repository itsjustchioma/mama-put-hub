import React from "react";
import { Link } from "react-router-dom";

function AchievementTag() {
  return (
    <div className="p-10 sm:p-12 rounded-round-shadow bg-pastel-blue relative flex items-center">
      <div className="">
        <h4 className="text-md sm:text-lg font-semibold text-black">
          Achievements
        </h4>
        <p className="text-sm sm:text-base dark:text-black">
          Review your progress.
        </p>
      </div>
      <img
        src="/public/assets/chef-hat.png"
        alt="userimage"
        className="self-start flex-shrink-0 w-14 ml-2 md:ml-24 md:w-24 h-14 md:h-24 "
      />

      <Link to={"/achievement"}>
        <button className="absolute right-6 top-1/2 transform -translate-y-1/2">
          <img
            src="/public/assets/right arrow grey.png"
            alt="right arrow"
            className="w-4"
          />
        </button>
      </Link>
    </div>
  );
}

export default AchievementTag;
