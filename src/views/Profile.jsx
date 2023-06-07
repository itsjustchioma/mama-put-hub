import React from "react";
import Header from "../components/Header";
import ProfileTag from "../components/Profile/ProfileTag";
import AchievementTag from "../components/Achievement/AchievementTag";
import ProfileOptions from "../components/Profile/ProfileOptions";

function Profile() {
  return (
    <div className="bg-background-color h-[95vh] w-5\6 md:h-[100vh] m-auto">
      <div className="w-10/12 mx-auto">
        <ProfileTag />
        <AchievementTag />
        <ProfileOptions />
      </div>
    </div>
  );
}

export default Profile;
