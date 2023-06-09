import React, { useEffect, useState } from "react";
import user from "/assets/user.png";
import { Link, useNavigate } from "react-router-dom";
import BackArrow from "../components/BackClick/BackArrow";
import { Badges } from "../components/Achievement/AchievementBadgesList";
import { account, databases } from "../services/appwriteConfig";

function MyProfile() {
  const lastBadge = Badges[Badges.length - 1];
  const navigate = useNavigate();
  const [bio, setBio] = useState(""); // State variable to store the bio
  const [profileDetails, setProfileDetails] = useState([]);

  const handleBackClick = () => {
    navigate(-1); // Go back to the previous page
  };

  const userId = account.get();

  const filterUserDetailsById = async (userId) => {
    try {
      const response = await databases.listDocuments(
        "64773737337f23de254d",
        "647b7649a8bd0a7073be",
        []
      );
      console.log(response);

      const filteredUsers = response.documents.filter(
        (user) => user.userId === userId
      );

      console.log(filteredUsers);

      setProfileDetails(filteredUsers);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    // Call the filterUserDetailsById function with the user ID
    userId.then(
      function (response) {
        console.log(response);
        console.log(response.$id);
        filterUserDetailsById(response.$id); // Call the function with the user ID
      },
      function (error) {
        console.log(error);
      }
    );
  }, []); // Run the effect only once on component mount

  return (
    <div className="md:w-[80%] md:mx-auto mt-5 h-[90vh] overflow-scroll no-scrollbar">
      <div className="ml-4">
        <BackArrow onClick={handleBackClick} />
      </div>
      <div className="p-4 md:mt-28 items-center">
        <div className="flex items-center mb-4">
          <img
            src={profileDetails.length > 0 ? profileDetails[0].photo : ""}
            alt="Profile"
            className="w-16 h-16 rounded-full mr-4 bg-gray-200"
          />
          <div>
            <h2 className="text-2xl font-bold">Bio</h2>
            <p>{profileDetails.length > 0 ? profileDetails[0].bio : ""}</p> {/* Render the bio value */}
          </div>
        </div>
        <div className="p-4 bg-gray-200 rounded mb-4">
          <p className="font-semibold">Email Address: {profileDetails.length > 0 ? profileDetails[0].email : ""}</p>
        </div>
      
        
       
      </div>
    </div>
  );
}

export default MyProfile;
