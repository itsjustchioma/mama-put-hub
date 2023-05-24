import React from "react";
import AchievementAvatar from "../components/Achievement/AchievementAvatar";
import AchievementBadges from "../components/Achievement/AchievementBadges";

function Achievement() {
  return (
    <div className="bg-pastel-blue">
      <h1 className="font-bold text-xl md:text-2xl text-center my-4 ">
        Dashboard
      </h1>
      <AchievementAvatar />
      <br></br>
      <AchievementBadges />
    </div>
  );
}

export default Achievement;
