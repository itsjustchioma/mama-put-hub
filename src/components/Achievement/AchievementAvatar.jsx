import { React } from "react";

function AchievementAvatar() {
  return (
    <div className="mx-4 my-4 md:mx-24 md:my-6">
      <div className="p-10 sm:p-6 rounded-round-shadow border bg-background-color relative flex items-center">
        <div className="">
          <h4 className="text-md sm:text-lg font-semibold text-black">
            Achievements.
          </h4>
          <p className="text-sm sm:text-base dark:text-black">
            Review your progress.
          </p>
        </div>
        <img
          src="/public/assets/piechart.png"
          alt="userimage"
          className="self-start flex-shrink-0 w-24 ml-4 md:ml-24 md:w-24 h-24 md:h-24 "
        />
      </div>
    </div>
  );
}

export default AchievementAvatar;
