import React, { useState, useEffect, useRef } from "react";
import { Menus } from "./menuData";
import burger from "/assets/burger.png";
import HorizontalLine from "../HorizontalLine";

const SideBarNavigation = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sidebarRef = useRef(null);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  const handleClickOutside = (event) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="z-[999]">
      <button onClick={toggleVisibility}>
        {isVisible ? (
          ""
        ) : (
          <img
            src={burger}
            className="z-[999] sm:block absolute top-10 left-10 w-14 hidden"
            alt="Burger Menu"
          />
        )}
      </button>

      <div
        ref={sidebarRef}
        className={`sidebar z-[999] fixed top-0 bottom-0 left-0 w-56 duration-500 transition-transform bg-background-color ${
          isVisible ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="font-bold text-center mt-5 text-lg">MamaPutHub</div>
        <div className="p-2.5 mt-2">
          <div>
            <form action="">
              {/* <div className="search flex items-center rounded-md p-2.5 bg-orange-400">
                <ion-icon name="search-outline"></ion-icon>
                <input
                  type="text"
                  className="ml-2 bg-transparent cursor-pointer placeholder-white"
                  placeholder="Search"
                />
              </div> */}
            </form>
          </div>

          <ul>
            {Menus.map((menu, i) => (
              <li key={i} className="">
                <a
                  href={menu.path}
                  className="flex flex-col text-center pt-6 hover:bg-copper-orange"
                >
                  <div className="p-2.5 mb-7 flex items-center rounded-md px-4 duration-300 cursor-pointer">
                    <img src={menu.icon} alt={menu.altText} className="w-4" />
                    <span className="text-[15px] ml-4">{menu.name}</span>
                  </div>
                  <HorizontalLine />
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer">
          <i className="bi bi-box-arrow-in-right"></i>
          <span className="text-[15px] ml-4">Logout</span>
        </div>
      </div>
    </div>
  );
};

export default SideBarNavigation;
