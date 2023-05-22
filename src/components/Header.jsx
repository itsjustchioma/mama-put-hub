import React, {useState} from "react";
import bell from "/assets/bell.png";
import search from "/assets/search.png";



export default function Header({ showNotification }) {
const  [searchVisible, setSearchVisible] = useState(false);
const  [hideSearch, sethideSearch] = useState(false);

const handleClick = () =>{
    setSearchVisible(true);
    sethideSearch(!hideSearch);

}

// const hideSearchImage = () =>{
//     sethideSearch(!hideSearch);
// }

  return (
    <header className="flex justify-end items-center  py-2 ">
      <h1 onClick={handleClick} > {hideSearch ? "" : <img src={search} className="w-6   mr-4" alt="" /> }</h1>
      {searchVisible && (
            <>
          <div className="flex bg-slate-200 rounded-3xl p-3">
            <img src={search} className="w-6   mr-4" alt="" />
            <input type="text  " className="bg-transparent outline-none" />
        </div>
        <button className="ml-4">cancel</button>

            </>
      )}
      <div className="flex items-center ">
       
        <span className="text-lg" onClick={handleClick}> {hideSearch ? "" : <img src={bell} className="w-6   mr-4" alt="" /> } </span>
      </div>
    </header>
  );
}
