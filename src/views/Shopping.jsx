import React from "react";
import ShoppingCategory from "../components/Shopping/ShoppingCategory";

function Shopping() {
  return (
    <div>
      <h1 className="font-bold text-xl md:text-2xl text-center p-4">
        Shopping List
      </h1>
      <ShoppingCategory />
    </div>
  );
}

export default Shopping;
