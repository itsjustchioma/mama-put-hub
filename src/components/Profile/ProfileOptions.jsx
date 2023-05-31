import React from "react";
import { Link } from "react-router-dom";
import { ProfileMenu } from "./ProfileMenu";
import HorizontalLine from "../HorizontalLine";
import rightArrow from "/assets/right arrow.png";

function ProfileOptions() {
  return (
    <>
      {ProfileMenu.map((pMenu, i) => (
        <div key={i}>
          <div className="p-6 sm:p-12 rounded-md relative flex items-center">
            <img
              src={pMenu.icon}
              alt="userimage"
              className="self-start flex-shrink-0 w-14 md:w-16 h-14 md:h-16 rounded-xl dark:bg-small-grey"
            />
            <div className="ml-6">
              <h4 className="text-md sm:text-lg font-semibold text-black">
                {pMenu.name}
              </h4>
            </div>
            <Link to={pMenu.path}>
              <button className="absolute right-6 top-1/2 transform -translate-y-1/2">
                <img
                  src={rightArrow}
                  alt="right arrow"
                  className="w-4"
                />
              </button>
            </Link>
            <HorizontalLine />
          </div>
          {/* Settings */}
        </div>
      ))}
    </>
  );
}

export default ProfileOptions;
