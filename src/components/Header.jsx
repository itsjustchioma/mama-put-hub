import React from "react";
import bell from "/assets/bell.png";
import search from "/assets/search.png";



export default function Header({ showNotification }) {
  return (
    <header className="flex justify-end items-center px-4 py-2 ">
      <h1><img src={search} className="w-6   mr-4" alt="" /></h1>
      <div className="flex items-center ">
       
        <span className="text-lg">  <img src={bell} className="w-6" alt="" /> </span>
      </div>
    </header>
  );
}
