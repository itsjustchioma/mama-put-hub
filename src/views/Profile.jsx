import React from "react";
import Header from "../components/Header";
import ProfileTag from "../components/Profile/ProfileTag";
import AchievementTag from "../components/Achievement/AchievementTag";
import ProfileOptions from "../components/Profile/ProfileOptions";

function Profile() {
  return (
    <div className="bg-background-color h-[90vh] overflow-scroll  m-auto">
      <Header />
      <div className="w-10/12 mx-auto">
        <h1 className="text-xl  font-semibold">Profile</h1>
        <ProfileTag />
        <AchievementTag />
        <ProfileOptions />
        <div className="bg-background-color h-[90vh] overflow-scroll  m-auto">
          <div className="w-10/12 mx-auto"></div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
