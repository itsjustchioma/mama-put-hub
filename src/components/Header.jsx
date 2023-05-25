import React, { useState } from "react";
import bell from "/assets/bell.png";
import search from "/assets/search.png";
import FilterModal from "./Filter/FilterModal";
import filter from "/public/assets/filter.png";

export default function Header({ showNotification }) {
  const [searchVisible, setSearchVisible] = useState(false);
  const [hideSearch, sethideSearch] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const handleClick = () => {
    setSearchVisible(true);
    sethideSearch(!hideSearch);
  };

  return (
    <header className="flex justify-end items-center  py-2 ">
      <h1 onClick={handleClick}>
        {" "}
        {hideSearch ? "" : <img src={search} className="w-6   mr-4" alt="" />}
      </h1>
      {searchVisible && (
        <>
          <div className="flex bg-lemon-meringue rounded-3xl w-[200px] p-[0.5rem]">
            <img src={search} className="w-6   mr-4" alt="" />
            <input type="text  " className="bg-transparent  outline-none" />
          </div>
          <button
            className="m-2 text-sm"
            onClick={() => {
              setSearchVisible(false);
              sethideSearch(true);
            }}
          >
            cancel
          </button>
        </>
      )}
      <div className="flex items-center ">
        <span className="text-lg">
          {" "}
          <img src={bell} className="w-6   mr-4" alt="" />{" "}
        </span>
        <span
          className="text-lg FilterModalBtn"
          onClick={() => {
            setOpenModal(true);
          }}
        >
          {" "}
          <img src={filter} className="w-6   mr-4" alt="" />{" "}
        </span>
        {openModal && <FilterModal closeModal={setOpenModal} />}
      </div>
    </header>
  );
}
