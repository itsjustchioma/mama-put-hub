import React, { useState, useRef, useEffect } from "react";
import bell from "/assets/bell.png";
import search from "/assets/search.png";
import FilterModal from "./Filter/FilterModal";
import filter from "/assets/filter.png";
import { databases } from "../services/appwriteConfig";

export default function Header({ showNotification }) {
  const [searchVisible, setSearchVisible] = useState(false);
  const [hideSearch, setHideSearch] = useState(false);
  const [showSearchButton, setShowSearchButton] = useState(true);
  const [openModal, setOpenModal] = useState(false);
  const [searchText, setSearchText] = useState(""); // Track the input field's text
  const [showNotifications, setShowNotifications] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const inputRef = useRef(null);

  const handleClick = () => {
    setSearchVisible(!searchVisible);
    setHideSearch(!hideSearch);
    setShowSearchButton(!showSearchButton);
  };

  const handleInputChange = async (e) => {
    const searchText = e.target.value;
    setSearchText(searchText);

    if (searchText.trim() !== "") {
      try {
        const response = await databases.listDocuments(
          "64676cf547e8830694b8",
          "647b9e24d59661e7bfbe",
          [
            {
              field: "name",
              operator: "LIKE",
              value: `%${searchText}%`,
            },
            {
              field: "type",
              operator: "LIKE",
              value: `%${searchText}%`,
            },
          ]
        );

        setSearchResults(response.documents);
        console.log("Search bar is working");
      } catch (error) {
        console.log(error);
      }
    } else {
      setSearchResults([]);
    }
  };

  const clearInput = () => {
    setSearchText(""); // Clear the input field's text
  };

  const handleBellClick = () => {
    setShowNotifications(!showNotifications); // Toggle the visibility of the notification dropdown
  };

  const handleOutsideClick = (e) => {
    if (inputRef.current && !inputRef.current.contains(e.target)) {
      setSearchVisible(false); // Hide the input field when clicking outside
      setShowSearchButton(true); // Show the search button
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  // Dummy array of notifications
  const notifications = [
    {
      id: 1,
      message: "YOu got a 5 star rating!",
      date: "2023-05-28",
      time: "09:00 AM",
      read: false,
    },
    {
      id: 2,
      message: "John commented on your recipe",
      date: "2023-05-27",
      time: "02:30 PM",
      read: true,
    },
    {
      id: 3,
      message: "Upcoming event: Conference on AI",
      date: "2023-05-30",
      time: "10:00 AM",
      read: false,
    },
  ];

  return (
    <header className="flex justify-end items-center py-2 flex-wrap">
      <h1 onClick={handleClick}>
        {showSearchButton && <img src={search} className="w-6 mr-4" alt="" />}
      </h1>
      {searchVisible && (
        <>
          <form action="" className="flex flex-wrap">
            <div
              className="flex bg-lemon-meringue rounded-3xl w-[250px] p-[0.5rem] h-10 mt-2 ml-4"
              ref={inputRef}
            >
              <img src={search} className="w-6 h-6 mr-4" alt="search" />
              <input
                required
                type="text"
                className="bg-transparent outline-none"
                value={searchText}
                onChange={handleInputChange}
              />
              {/* {searchText && (
                <span className="cursor-pointer" onClick={clearInput}>
                  &#x2716;
                </span>
              )} */}
            </div>
            <button
              type="submit"
              className="m-2 text-sm bg-pastel-blue p-2 rounded-2xl text-white"
            >
              Submit
            </button>
          </form>
        </>
      )}
    

      {searchResults.length > 0 && (
        <div className="search-results">
          {searchResults.map((result) => (
            <p key={result.$id}>{result.name}</p>
            // Render other relevant information from the search results
          ))}
        </div>
      )}
    </header>
  );
}
