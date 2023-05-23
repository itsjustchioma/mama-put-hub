import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menus } from "./menuData";

const Navigation = () => {
  const location = useLocation();
  const [active, setActive] = useState(0);

  return (
    <div className="bg-background-color max-h-[4.4rem] pl-11 rounded-t-xl absolute bottom-0 right-0 left-0 z-[999] pb-14  sm:hidden">
      <ul className="flex relative">
        <span
          className={`bg-laurel-green duration-500 ${Menus[active].dis} border-4 border-white h-16 w-16 absolute -top-6 rounded-full -left-6`}
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
                <img
                  src={menu.icon}
                  alt={menu.altText}
                  className="w-4 absolute "
                />
              </span>
              <span
                className={`${
                  active === i
                    ? "translate-y-4 duration-700 opacity-100"
                    : "opacity-0 translate-y-10"
                } `}
              ></span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navigation;
