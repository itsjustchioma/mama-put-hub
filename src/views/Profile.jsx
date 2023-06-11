import React, { useState, useEffect } from "react";
import ProfileTag from "../components/Profile/ProfileTag";
import ProfileOptions from "../components/Profile/ProfileOptions";
import { account, databases } from "../services/appwriteConfig";
import { Link, useNavigate } from "react-router-dom";

function Profile() {
  const navigate = useNavigate();

  // Run the effect only once on component mount
  const handleLogout = async () => {
    try {
      await account.deleteSession("current");
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="bg-background-color h-[95vh] w-5\6 md:h-[100vh] m-auto">
      <div className="w-10/12 mx-auto">
        <ProfileTag />
        <ProfileOptions />
        <div
          className="p-2.5 mt-3 flex md:hidden items-center rounded-md  duration-300 cursor-pointer justify-end"
          onClick={handleLogout}
        >
          <img src="/assets/back-arrow.png" alt="" className="w-4" /> <br /> <br />
          <br />
          <span className="text-sm ml-4">Logout</span>
        </div>
      </div>
    </div>
  );
}

export default Profile;
