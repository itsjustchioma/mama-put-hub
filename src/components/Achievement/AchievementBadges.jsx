import React from "react";
import { Badges } from "./AchievementBadgesList";

function AchievementBadges() {
  return (
    <>
      <h1 className="font-bold text-center">Achievement Badges</h1>
      <div className="p-10 sm:p-12 bg-pastel-blue relative items-center">
        <div className="grid grid-cols-2 md:grid-cols-3 text-sm md:text-lg ">
          {Badges.map((badge, i) => (
            <div key={i} className="my-2">
              {/* <img src={badge.img} alt={badge.img}/> */}
              <p>{badge.name}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default AchievementBadges;
