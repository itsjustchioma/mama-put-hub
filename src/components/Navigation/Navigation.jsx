import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menus } from "./menuData";

const Navigation = () => {
  const location = useLocation();
  const [active, setActive] = useState(0);

  return (
    <nav className="bg-slate-300 fixed bottom-0 left-0 right-0 z-10">
      <ul className="flex justify-around py-2">
        {Menus.map((menu, i) => (
          <li key={i}>
            <Link
              to={menu.path}
              className={`flex flex-col items-center text-white ${
                location.pathname === menu.path ? "active" : ""
              }`}
              onClick={() => setActive(i)}
            >
              <span
                className={`text-lg ${
                  i === active ? "text-white" : "text-gray-400"
                }`}
              >
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    i === active ? "bg-white" : ""
                  }`}
                >
                  <img
                    src={menu.icon}
                    alt={menu.altText}
                    className="w-6 h-6 mb-1"
                  />
                </div>
              </span>
              <span className="text-xs">{menu.label}</span>
              {location.pathname === menu.path && (
                <span className="absolute -bottom-0.5 left-0 right-0 h-1 bg-white"></span>
              )}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
