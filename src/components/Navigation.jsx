import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const Menus = [
    { name: "Home", icon: "home-outline", path: "/" },
    { name: "Profile", icon: "person-outline", path: "/profile" },
    { name: "Message", icon: "chatbubble-outline", path: "/messaging" },
    { name: "Photos", icon: "camera-outline", path: "/photos" },
    { name: "Settings", icon: "settings-outline", path: "/settings" },
  ];

  const location = useLocation();
  const [active, setActive] = useState(0);

  return (
    <div className="bg-slate-300 max-h-[4.4rem] px-6 rounded-t-xl absolute bottom-0 right-0 left-0  pb-3  sm:hidden">
      <ul className="flex relative">
        <span
          className={`bg-orange-500 duration-500 ${Menus[active].dis} border-4 border-white h-16 w-16 absolute -top-6 rounded-full`}
        >
          {/* Sticker styling */}
          {/* ... */}
        </span>
        {Menus.map((menu, i) => (
          <li key={i} className="w-16">
            <Link
              to={menu.path}
              className={`flex flex-col text-center pt-6 ${
                location.pathname === menu.path ? "active" : ""
              }`}
              onClick={() => setActive(i)}
            >
              <span
                className={`text-xl cursor-pointer duration-500 ${
                  i === active && "-mt-6 text-white"
                }`}
              >
                <ion-icon name={menu.icon}></ion-icon>
              </span>
              <span
                className={`${
                  active === i
                    ? "translate-y-4 duration-700 opacity-100"
                    : "opacity-0 translate-y-10"
                } `}
              >
                {/* Transition content */}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navigation;
