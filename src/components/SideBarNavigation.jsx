import React, { useState, useEffect, useRef } from "react";

import burger from '/assets/burger.avif'

import HorizontalLine from "./HorizontalLine";


export default function SideBarNavigation() {
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

  const Menus = [
    { name: "Home", icon: "home-outline", dis: "translate-x-0" },
    { name: "Profile", icon: "person-outline", dis: "translate-x-16" },
    { name: "Message", icon: "chatbubble-outline", dis: "translate-x-32" },
    { name: "Photos", icon: "camera-outline", dis: "translate-x-48" },
    { name: "Settings", icon: "settings-outline", dis: "translate-x-64" },
  ];

  return (
    <div className="">
      <button onClick={toggleVisibility}>
        {isVisible ? "" :  <img src= {burger} className="    sm:block absolute top-10 left-16  w-16  hidden "/>}
      </button>

      <span className="absolute text-white text-4xl top-5 left-5 cursor-pointer">
      <ion-icon name="arrow-forward-outline"></ion-icon>      </span>

      <div
        ref={sidebarRef}
        className={`sidebar fixed top-0 bottom-0 left-0 w-56 duration-500 transition-transform transform  bg-slate-300 ${
          isVisible ? "translate-x-0" : "-translate-x-full"
        } `}
      >
        <div className="font-bold text-center mt-5 text-lg">MamaPutHub</div>
        <div className="p-2.5 mt-2">
          <div>
            <form action="">
              <div className="search flex items-center rounded-md p-2.5 bg-orange-400 ">
                <ion-icon name="search-outline"></ion-icon>
                <input
                  type="text"
                  className="ml-2 bg-transparent cursor-pointer  placeholder-white"
                  placeholder="search"
                />
              </div>
            </form>
          </div>

          <ul>
            {Menus.map((menu, i) => (
              <li key={i} className="">
                <a className="flex flex-col text-center pt-6">
                  <div className="p-2.5 mb-7 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-orange-300">
                    <span className="text-[15px] ml-4 ">
                      {menu.name}
                    </span>
                  </div>
                  <HorizontalLine/>
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer">
          <i className="bi bi-box-arrow-in-right"></i>
          <span className="text-[15px] ml-4 ">Logout</span>
        </div>
      </div>
    </div>
  );
}
