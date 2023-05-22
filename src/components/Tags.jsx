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
    <div className="flex mx-8 w-80 whitespace-nowrap no-scrollbar">
      {tags.map((tag, index) => (
        <span
          className="m-2 text-center    p-2 rounded-3xl  border-2 border-black"
          key={index}
        >
          <span>{tag.name}</span>
        </span>
      ))}
    </div>
  );
}
