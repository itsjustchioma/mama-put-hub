import React, {useState,useEffect} from "react";
import { Link } from "react-router-dom";
import { UserInfo } from "./UserInfo";
import rightArrow from "/assets/right arrow.png";
import { account } from "../../services/appwriteConfig";
import Login from "../../views/Login";


function ProfileTag() {
  const [userDetails, setUserDetails] = useState();

  useEffect(() => {
    const getData = account.get()
    getData.then(
      function(response){
        setUserDetails(response)
      },
      function(error){
        console.log(error);
      }
    )
  }, [])
  return (
    <>
            <h1 className="text-xl  font-semibold pt-12 pl-8">Profile</h1>

    {userDetails ? ( <div className="p-6 sm:p-12 rounded-md relative flex items-center">
      <img
        // src={userDetails.name}
        src="/assets/user.png"
        alt="userimage"
        className="self-start flex-shrink-0 w-14 md:w-16 h-14 md:h-16 border rounded-full dark:bg-gray-500 dark:border-gray-700"
      />
      <div className=" ml-2">
        <h4 className="text-md sm:text-lg font-semibold text-black">
          {userDetails.name}
        </h4>
        <p className="text-sm sm:text-base dark:text-black">My Profile</p>
      </div>
      <Link to={"/myprofile"}>
        <button className="absolute right-6 top-1/2 transform -translate-y-1/2">
          <img
            src={rightArrow}
            alt="right arrow"
            className="w-4"
          />
        </button>
      </Link>
    </div>) : (
       "")} 
   
    </>
  );
}

export default ProfileTag;
