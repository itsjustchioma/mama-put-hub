import React, { useState } from 'react';

import BackArrow from '../components/BackClick/BackArrow';
import { Link, useNavigate } from "react-router-dom";


function Settings() {

   // State variables to store form data
  const [photo, setPhoto] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [email, setEmail] = useState('');
  const [Bio, setBio] = useState('');
  const [uploadProgress, setUploadProgress] = useState(0);


    // Event handlers for form input changes
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

  const handleSubmit = (event) => {
    event.preventDefault();

    // Perform necessary actions with the form data, such as updating the user's profile

    // Reset form fields
    setPhoto('');
    setPassword('');
    setConfirmPassword('');
    setEmail('');
    setBio('');
  };

  const navigate = useNavigate();

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
                  src={URL.createObjectURL(photo)}
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
              id="photo"
              accept="image/*"
              className="hidden"
              onChange={handlePhotoChange}
            />
          </label>
        </div>    <div className="mb-6">
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
          <label htmlFor="password" className="block font-medium mb-1">
            New Password:
          </label>
          <input
            type="password"
            id="password"
            className="w-full px-4 py-2 rounded border border-gray-300"
            value={password}
            onChange={handlePasswordChange}
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
     
    
        {/* <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
        >
          Save Changes
        </button> */}
      </form>
    </div>
  );
}

export default Settings;
