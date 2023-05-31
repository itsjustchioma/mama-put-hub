import React from "react";
import { Link } from "react-router-dom";
import { UserInfo } from "./UserInfo";
import rightArrow from "/assets/right arrow.png";

function ProfileTag() {
  return (
    <div className="p-6 sm:p-12 rounded-md relative flex items-center">
      <img
        src={UserInfo.profilePicture}
        alt="userimage"
        className="self-start flex-shrink-0 w-14 md:w-16 h-14 md:h-16 border rounded-full dark:bg-gray-500 dark:border-gray-700"
      />
      <div className=" ml-2">
        <h4 className="text-md sm:text-lg font-semibold text-black">
          {UserInfo.name}
        </h4>
        <p className="text-sm sm:text-base dark:text-black">My Profile</p>
      </div>
      <Link to={"/myprofile"}>
        <button className="absolute right-6 top-1/2 transform -translate-y-1/2">
          <img
            src={rightArrow}
            alt="right arrow"
            className="w-4"
          />
        </button>
      </Link>
    </div>
  );
}

export default ProfileTag;
