import React from "react";


 export const tags = [
  { name: "Breakfast" },
  { name: "Brunch" },
  { name: "Lunch" },
  { name: "Diary" },
  { name: "Dinner" },
  { name: "Snacks" },
  { name: "Appetizers" },
  { name: "Salads" },
  { name: "Soups" },
  { name: "Pasta and Noodles" },
  { name: "Desserts" },


];

export default function Tags() {
 
  return (
    <div className="flex  w-full overflow-scroll mx-auto whitespace-nowrap no-scrollbar md:mx-auto md:w-[70%]">
      {tags.map((tag, index) => (
        <span
          className="m-2 text-center cursor-pointer   p-1 rounded-3xl  border-[1px] border-black text-[12px]"
          key={index}
        >
          <span>{tag.name}</span>
        </span>
      ))}
    </div>
  );
}
