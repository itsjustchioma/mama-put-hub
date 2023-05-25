//displays a back arrow icon that users can click on to go back to the previous page.
import React from "react";
import leftarrow from "/assets/left arrow.png";

export default function BackArrow({ onClick }) {
  return (
    <button onClick={onClick}>
      <img src={leftarrow} className="w-4" alt="Back" />
    </button>
  );
}
