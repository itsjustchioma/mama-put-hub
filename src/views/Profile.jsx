import React from "react";
import Header from "../components/Header";
import ProfileTag from "../components/Profile/ProfileTag";
import AchievementTag from "../components/Achievement/AchievementTag";
import ProfileOptions from "../components/Profile/ProfileOptions";

function Profile() {
  return (
    <div className="bg-background-color w-5\6 md:h-[100vh] m-auto">
      <Header />
      <div className="w-10/12 mx-auto">
        <h1 className="text-xl  font-semibold">Profile</h1>
        <ProfileTag />
        <AchievementTag />
        <ProfileOptions />
      
      </div>
    </div>
  );
}

export default Profile;
