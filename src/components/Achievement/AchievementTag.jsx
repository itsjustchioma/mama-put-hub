import React from "react";
import { Link } from "react-router-dom";
import chefHat from "/assets/chef-hat.png";

function AchievementTag() {
  return (
    <div className="p-10 sm:p-12 rounded-round-shadow bg-pastel-blue relative flex flex-wrap items-center justify-between">
      <div className="">
        <h4 className="text-md sm:text-lg font-semibold text-black">
          Achievements
        </h4>
        <p className="text-sm sm:text-base dark:text-black">
          Review your progress.
        </p>
      </div>
      <img
        src={chefHat}
        alt="userimage"
        className="self-start w-9 h-8 flex-shrink-0 w-14 ml-2 md:ml-24 md:w-20 h-4 md:h-24 "
      />

      <Link to={"/achievement"}>
        <button className="absolute right-6 top-1/2 transform -translate-y-1/2">
          <img
            src="/assets/right arrow grey.png"
            alt="right arrow"
            className="w-4"
          />
        </button>
      </Link>
    </div>
  );
}

export default AchievementTag;
