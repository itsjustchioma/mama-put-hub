import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { saveProfile } from '../services/appwriteConfig';
import { account,storage, databases } from '../services/appwriteConfig';

import BackArrow from '../components/BackClick/BackArrow';
import { Link, useNavigate } from "react-router-dom";

function Settings() {
  const [photo, setPhoto] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [email, setEmail] = useState('');
  const [Bio, setBio] = useState('');
  const [uploadProgress, setUploadProgress] = useState(0);
  const [selectedPicture, setSelectedPicture] = useState(null);
  const [documentID, setDocumentID] = useState(null);
  const [profile, setProfile ] = useState(null);
  
  const navigate = useNavigate();



  const handlePhotoChange = (event) => {
    const selectedPhoto = event.target.files[0];
    setPhoto(selectedPhoto);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleBioChange = (event) => {
    setBio(event.target.value);
  };

  const userId = account.get();

  userId.then(function (response) {
    console.log(response);
      console.log(response.$id);
  }, function (error) {
      console.log(error);
  });

 let imageUrl;


 const findProfileByUserId = async (userId) => {
  try {
    const response = await databases.listDocuments(
      "64773737337f23de254d",
      "647b7649a8bd0a7073be",
      []
    );

    const foundDocument = response.documents.find(doc => doc.userId === userId);
    return foundDocument;
  } catch (error) {
    console.log(error);
    throw new Error("Error finding profile by user ID");
  }
};


 

 useEffect(() => {
  const fetchSavedRecipes = async () => {
    try {
      const response = await databases.listDocuments(
        "64773737337f23de254d",
        "647b7649a8bd0a7073be",
        []
      );
      console.log(response);

      // Find the document with the current user ID
      const currentUserID = (await userId).$id;
      const foundDocument = response.documents.find(doc => doc.userId === currentUserID);
        setDocumentID(foundDocument);


      if (foundDocument) {
        // Get the document ID from the found document and store it in the state variable
        const documentId = foundDocument.$id;
        console.log(documentId);
        setDocumentID(documentId);
      } else {
        // No document found for the current user, handle accordingly
        console.log("No document found for the current user");
      }
    } catch (error) {
      console.log(error);
    }
  };

  fetchSavedRecipes();
}, []);


const handleSubmit = async (event) => {
  event.preventDefault();

  const fileInput = document.getElementById('imageUpload');
  const file = fileInput.files[0];

  if (!file) {
    console.log('Please select an image file');
    return;
  }

  setSelectedPicture(URL.createObjectURL(file));
  const fileId = uuidv4(); // Generate a random UUID

  const newImage = await storage.createFile("647e6735532e8f214235", fileId, file);
  const imageUrl = `https://cloud.appwrite.io/v1/storage/buckets/647e6735532e8f214235/files/${fileId}/view?project=64676cf547e8830694b8&mode=admin`;

  try {
    const currentUserID = (await userId).$id;

    const profileData = {
      userId: currentUserID,
      photo: imageUrl,
      email: email,
      bio: Bio,
    };

    const updatedProfile = await UpdateProfile(profileData);



    console.log(updatedProfile);
    const existingProfile = await findProfileByUserId(currentUserID);

    if (existingProfile) {
      // Update the existing profile
      const updatedProfile = await UpdateProfile(existingProfile.$id, profileData);
      console.log("Profile updated:", updatedProfile);
      navigate("/myprofile");
    } else {
      // Create a new profile
      const createdProfile = await saveProfile(profileData);
      console.log("Profile created:", createdProfile);
      navigate("/myprofile");
    }

    // Reset form fields
    setPhoto('');
    setPassword('');
    setConfirmPassword('');
    setEmail('');
    setBio('');
  } catch (error) {
    // Handle the error, such as displaying an error message
    console.error("Error saving/updating profile:", error);
  }
};


console.log(profile);



const UpdateProfile = async (profileData) => {
  try {
    console.log("Profile:", profileData);
    console.log("Document ID:", documentID); // Log the document ID

    if (documentID) {
      // Save the profile data to the database or update the existing profile
      const savedProfile = await databases.updateDocument(
        "64773737337f23de254d",
        "647b7649a8bd0a7073be",
        documentID,
        profileData
      );
      console.log("Saved Profile:", savedProfile);
      navigate("/myprofile");

      return savedProfile;
    } else {
      // Create a new profile
      const createdProfile = await saveProfile(profileData);
      console.log("Profile created:", createdProfile);
      navigate("/myprofile");
      return createdProfile;
    }
  } catch (error) {
    throw new Error(error);
  }
};






  const handleBackClick = () => {
    navigate(-1); // Go back to the previous page
  };

  return (
    <div className="px-4 py-6 h-[90vh] overflow-scroll no-scrollbar mb-16  md:w-[80%] md:mx-auto">
      <form onSubmit={handleSubmit}>
        <div className="flex items-center justify-between mb-4">
          <BackArrow onClick={handleBackClick} />
          <button type="submit">
            <div className="bg-green-500 rounded-full p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
          </button>
        </div>
        <h2 className="text-2xl font-bold mb-4">Profile Settings</h2>
        <div className="mb-6">
          <label htmlFor="photo" className="block font-medium mb-1">
            <div className="relative w-32 h-32 rounded-full overflow-hidden bg-gray-200 flex items-center justify-center">
              {photo ? (
                <img
                  className="w-full h-full object-cover"
                  src={selectedPicture}
                  alt="Profile"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-gray-500 text-4xl">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-12 w-12"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M15.158 6.342a5 5 0 1 0-6.316 0 7 7 0 0 0-7.124 7.124 5 5 0 0 0 0 6.316 7 7 0 0 0 7.124 7.124 5 5 0 0 0 6.316 0 7 7 0 0 0 7.124-7.124 5 5 0 0 0 0-6.316 7 7 0 0 0-7.124-7.124zm-1.414 9.9a4 4 0 1 1-5.656 0 4 4 0 0 1 5.656 0zM10 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              )}
              {photo && uploadProgress > 0 && uploadProgress < 100 && (
                <div
                  className="absolute bg-blue-500 h-1 bottom-0 left-0"
                  style={{ width: `${uploadProgress}%` }}
                ></div>
              )}
            </div>
            <input
              type="file"
              id="imageUpload"
              accept="image/*"
              className=""
              onChange={handlePhotoChange}
            />
          </label>
        </div>
        <div className="mb-6">
          <label htmlFor="Bio" className="block font-medium mb-1">
            Bio:
          </label>
          <textarea
            id="Bio"
            className="w-full px-4 py-2 rounded border border-gray-300"
            value={Bio}
            onChange={handleBioChange}
          />
        </div>
        <div className="mb-6">
          <label htmlFor="email" className="block font-medium mb-1">
            Email:
          </label>
          <input
            type="email"
            id="email"
            className="w-full px-4 py-2 rounded border border-gray-300"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
     
        <div className="mb-6">
          <label htmlFor="confirmPassword" className="block font-medium mb-1">
            Confirm Password:
          </label>
          <input
            type="password"
            id="confirmPassword"
            className="w-full px-4 py-2 rounded border border-gray-300"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
          />
        </div>
      </form>
    </div>
  );
}

export default Settings;
