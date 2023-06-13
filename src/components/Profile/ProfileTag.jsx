import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { account, databases } from "../../services/appwriteConfig";

function ProfileTag() {
  const userId = account.get();
  const [profileDetails, setProfileDetails] = useState([]);
  const [userDetails, setUserDetails] = useState();
  useEffect(() => {
    const getData = account.get();
    getData.then(
      function (response) {
        setUserDetails(response);
      },
      function (error) {
        console.log(error);
      }
    );
  }, []);

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
    <>
      <h1 className="text-3xl font-bold md:text-4xl text-center pt-12 pl-8">
        Profile
      </h1>
      <div className="p-4  items-center">
        {userDetails ? (
          <div className="py-6 sm:py-12 rounded-md relative flex items-center">
            <img
              src={profileDetails.length > 0 ? profileDetails[0].photo : ""}
              alt="?"
              className="self-start flex-shrink-0 w-14 md:w-16 h-14 md:h-16 border rounded-full dark:bg-gray-500 dark:border-gray-700"
            />
            <div className=" ml-2">
              <h4 className="text-md sm:text-lg font-semibold text-black">
                {userDetails.name}
              </h4>
              <p className="text-sm">
                {profileDetails.length > 0 ? profileDetails[0].bio : ""}
              </p>{" "}
              {/* Render the bio value */}
            </div>
          </div>
        ) : (
          ""
        )}
        <div className="p-2rounded mb-4">
          <p className="font-semibold text-sm">
            Email Address:{" "}
            {profileDetails.length > 0 ? profileDetails[0].email : ""}
          </p>
        </div>
      </div>
    </>
  );
}

export default ProfileTag;
