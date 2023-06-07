import React, { useState, useRef, useEffect } from "react";
import bell from "/assets/bell.png";
import search from "/assets/search.png";
import FilterModal from "./Filter/FilterModal";
import filter from "/public/assets/filter.png";

export default function Header({ showNotification }) {
  const [searchVisible, setSearchVisible] = useState(false);
  const [hideSearch, setHideSearch] = useState(false);
  const [showSearchButton, setShowSearchButton] = useState(true);
  const [openModal, setOpenModal] = useState(false);
  const [searchText, setSearchText] = useState(""); // Track the input field's text
  const [showNotifications, setShowNotifications] = useState(false);
  const inputRef = useRef(null);

  const handleClick = () => {
    setSearchVisible(!searchVisible);
    setHideSearch(!hideSearch);
    setShowSearchButton(!showSearchButton);
  };

  const handleInputChange = (e) => {
    setSearchText(e.target.value); // Update the input field's text
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
                type="text"
                className="bg-transparent outline-none"
                value={searchText}
                onChange={handleInputChange}
              />
              {searchText && (
                <span className="cursor-pointer" onClick={clearInput}>
                  &#x2716;
                </span>
              )}
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
      <div className="flex items-center">
        {/* <span className="text-lg">
          <img
            src={bell}
            className="w-6 mr-4 cursor-pointer"
            alt=""
            onClick={handleBellClick}
          />
          {showNotifications && (
            <div className="absolute right-0 mt-10 bg-white border rounded-lg shadow-lg p-4 cursor-pointer mr-4 z-20 text-[12px] overflow-scroll h-64 no-scrollbar">
              {notifications.map((notification) => (
                <p key={notification.id} className=" hover:bg-pastel-pink p-4">
                  {notification.message} <br />
                  {notification.time} <br />
                  {notification.date}


                </p>
              ))}
            </div>
          )}
        </span> */}
        <span
          className="text-lg FilterModalBtn"
          onClick={() => {
            setOpenModal(true);
          }}
        >
          <img src={filter} className="w-6 mr-4" alt="" />
        </span>
        {openModal && <FilterModal closeModal={setOpenModal} />}
      </div>
    </header>
  );
}
