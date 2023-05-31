import React from "react";
import { useNavigate } from "react-router-dom";
import AchievementAvatar from "../components/Achievement/AchievementAvatar";
import AchievementBadges from "../components/Achievement/AchievementBadges";
import BackArrow from "../components/BackClick/BackArrow";

function Achievement() {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1); // Go back to the previous page
  };

  return (
    <div className="bg-pastel-blue h-[93vh] overflow-scroll  no-scrollbar">
      <div className="w-5/6 mx-auto">
        <div className="flex">
          <BackArrow onClick={handleBackClick} />
          <h1 className="font-bold text-xl md:text-2xl text-center p-4">
            Dashboard
          </h1>
        </div>
        <AchievementAvatar />
        <br />
        <AchievementBadges />
      </div>
    </div>
  );
}

export default Achievement;
