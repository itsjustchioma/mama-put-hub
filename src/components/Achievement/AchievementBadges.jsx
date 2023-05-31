import React, { useState } from "react";
import { Badges } from "./AchievementBadgesList";

function AchievementBadges() {
  const [selectedBadge, setSelectedBadge] = useState(null);

  const handleBadgeClick = (badge) => {
    setSelectedBadge(badge);
  };

  const handleModalClick = () => {
    setSelectedBadge(null);
  };

  return (
    <>
      <h1 className="font-bold text-center">Achievement Badges</h1>
      <div className="p-10 sm:p-12 bg-pastel-blue relative items-center h-[40vh]  text-center ">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 text-sm md:text-lg ">
          {Badges.map((badge, i) => (
            <div
              key={i}
              className="my-2  flex flex-col items-center"
              onClick={() => handleBadgeClick(badge)}
            >
              <img src={badge.img} alt={badge.alt} className="w-16 h-16" />
              <p className="mt-2">{badge.name}</p>
            </div>
          ))}
        </div>
      </div>

      {selectedBadge && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
          onClick={handleModalClick}
        >
          <div className="bg-white p-4 m-6 text-center">
            <h2 className="font-bold text-xl mb-2">{selectedBadge.name}</h2>
            <p>{selectedBadge.description}</p>
          </div>
        </div>
      )}
    </>
  );
}

export default AchievementBadges;
