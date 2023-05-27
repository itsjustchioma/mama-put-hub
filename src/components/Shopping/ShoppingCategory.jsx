import React from "react";
import { ShoppingArray } from "./ShoppingCategoryArray";
import { Link } from "react-router-dom";

function ShoppingCategory() {
  return (
    <div className="mt-2 md:mt-12 md:ml-24 ml-16">
      {ShoppingArray.map((shopArray, i) => (
        <div
          key={i}
          className={`bg-${shopArray.backgroundColor} rounded-lg p-4 m-15 relative h-32`}
          style={{
            borderTopLeftRadius: "50px",
            borderBottomLeftRadius: "50px",
            margin: "10px",
          }}
        >
          <div className="flex items-center">
            <div>
              <img
                src={shopArray.img}
                alt={shopArray.alt}
                className="w-14 h-14 rounded-lg dark:bg-gray-500 dark:border-gray-700 p-1 md:w-24 md:h-24 md:ml-6 ml-4"
              />
            </div>
            <div className="md:ml-8 ml-6 text-sm md:text-lg">
              <p className="text-md md:text-xl font-semibold">
                {shopArray.name}
              </p>
              <p>{shopArray.noOfRecipes} recipes</p>
              <p>{shopArray.noOfIngredients} ingredients</p>
            </div>
            <div className="ml-auto">
              <Link to={"/savedrecipe"}>
                <button>
                  <img
                    src="/public/assets/right arrow.png"
                    alt="right arrow"
                    className="w-4"
                  />
                </button>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ShoppingCategory;
