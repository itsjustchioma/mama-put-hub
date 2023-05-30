import React from "react";
import user from "/public/assets/user.png";
import { Link, useNavigate } from "react-router-dom";
import BackArrow from "../components/BackClick/BackArrow";
import { Badges } from "../components/Achievement/AchievementBadgesList";

function MyProfile() {

  const lastBadge = Badges[Badges.length - 1];

  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1); // Go back to the previous page

  };
  return (
    <div className="md:w-[80%] md:mx-auto mt-5 h-[90vh] overflow-scroll no-scrollbar">
      <div className="ml-4">
      <BackArrow onClick={handleBackClick}  />


      </div>

    <div className="p-4  md:mt-28  items-center">

      <div className="flex items-center mb-4">
        <img
          src={user}
          alt="Profile"
          className="w-16 h-16 rounded-full mr-4 bg-gray-200"
        />
        <div>
          <h2 className="text-2xl font-bold">Bio</h2>
          <p>hello, call me chef chi i am the best</p>
        </div>
      </div>
      <div className="p-4 bg-gray-200 rounded mb-4">
        <p className="font-semibold">Rank: {lastBadge.name}</p>
      </div>
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="p-4 bg-gray-200 rounded">
          <h3 className="text-lg font-semibold">Recipes Saved</h3>
          <p className="text-3xl font-bold">34</p>
        </div>
        <div className="p-4 bg-gray-200 rounded">
          <h3 className="text-lg font-semibold">Recipes Created</h3>
          <p className="text-3xl font-bold">54</p>
        </div>
      </div>
      <div className="p-4 bg-gray-200 rounded">
        <h3 className="text-lg font-semibold">Bookmarked by</h3>
        <p className="text-3xl font-bold">36</p>
      </div>
      <div className="p-4 bg-gray-200 rounded mt-4">
        <h3 className="text-lg font-semibold">Achievements</h3>
        <ul className="list-disc pl-6">
          {Badges.map((badge, i) => (
            <li key={i}>{badge.name}</li>
          ))}
      
        </ul>
      </div>
    </div>
    </div>
  );
}

export default MyProfile;
