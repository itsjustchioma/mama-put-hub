import React from "react";
import AchievementAvatar from "../components/Achievement/AchievementAvatar";
import AchievementBadges from "../components/Achievement/AchievementBadges";

function Achievement() {
  return (
    <div className="bg-pastel-blue h-[100vh]">
      <div className="w-5/6  mx-auto" >
      <h1 className="font-bold text-xl md:text-2xl text-center p-4  ">
        Dashboard
      </h1>
      <AchievementAvatar />
      <br></br>
      <AchievementBadges />
      </div>
     
    </div>
  );
}

export default Achievement;
