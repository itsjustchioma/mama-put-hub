import React from "react";

export default function Tags() {
  const tags = [
    { name: "Popular" },
    { name: "Lactose Free" },
    { name: "Sugar Free" },
    { name: "Diary" },
    { name: "Salads" },
    { name: "Italian Cuisine" },
    { name: "Mexican Dish" },
    { name: "Salads" },


  ];
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
