import React, { useState } from "react";
import bell from "/assets/bell.png";
import search from "/assets/search.png";
import FilterModal from "./Filter/FilterModal";
import filter from "/public/assets/filter.png";

export default function Header({ showNotification }) {
  const [searchVisible, setSearchVisible] = useState(false);
  const [hideSearch, setHideSearch] = useState(false);
  const [showSearchButton, setShowSearchButton] = useState(true);
  const [openModal, setOpenModal] = useState(false);

  const handleClick = () => {
    setSearchVisible(!searchVisible);
    setHideSearch(!hideSearch);
    setShowSearchButton(!showSearchButton);
  };

  const handleCancel = () => {
    setSearchVisible(false);
    setHideSearch(true);
    setShowSearchButton(true);
  };

  return (
    <header className="flex justify-end items-center  py-2 ">
      <h1 onClick={handleClick}>
        {showSearchButton && <img src={search} className="w-6   mr-4" alt="" />}
      </h1>
      {searchVisible && (
        <>
          <form action="" className="flex flex-wrap">
            <div className="flex bg-lemon-meringue rounded-3xl w-[200px] p-[0.5rem] h-10 mt-2 ml-4">
              <img src={search} className="w-6 h-6 mr-4" alt="search" />
              <input type="text" className="bg-transparent outline-none" />
            </div>
            <button
              type="submit"
              className="m-2 text-sm bg-pastel-blue p-2  rounded-2xl  text-white"
              onClick={handleCancel}
            >
              Submit
            </button>
            <button
              className="m-2 text-sm bg-pastel-blue p-2  rounded-2xl  text-white"
              onClick={handleCancel}
            >
              Cancel
            </button>
          </form>
        </>
      )}
      <div className="flex items-center">
        <span className="text-lg">
          <img src={bell} className="w-6 mr-4" alt="" />
        </span>
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
