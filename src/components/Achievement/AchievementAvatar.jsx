import { React } from "react";

function AchievementAvatar() {
  return (
    <div className=" my-4  md:my-6">
      <div className="p-10 sm:p-6 rounded-round-shadow border bg-background-color relative flex items-center justify-between   ">
        <div className="">
          <h4 className="text-md sm:text-lg font-semibold text-black">
            Overall progress.
          </h4>
          <p className="text-sm sm:text-base dark:text-black">
            This represents your cumulative progress thus far.
          </p>
        </div>
        <img
          src="/public/assets/25percent.png"
          alt="userimage"
          className="self-start flex-shrink-0 w-24 ml-4 md:ml-24 md:w-24 h-24 md:h-24 "
        />
      </div>
    </div>
  );
}

export default AchievementAvatar;
