import React from "react";

export default function Tags() {
  const tags = [
    { name: "Popular" },
    { name: "Lactose Free" },
    { name: "Sugar Free" },
    { name: "Diary" },
    { name: "Salads" },
  ];
  return (
    <div className="flex  w-80 overflow-scroll whitespace-nowrap no-scrollbar">
      {tags.map((tag, index) => (
        <span
          className="m-2 text-center    p-1 rounded-3xl  border-[1px] border-black text-[12px]"
          key={index}
        >
          <span>{tag.name}</span>
        </span>
      ))}
    </div>
  );
}
