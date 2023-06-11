import ShoppingCategory from "../components/Shopping/ShoppingCategory";
import { Link } from "react-router-dom";

function Shopping() {
  return (
    <div className="overflow-scroll no-scrollbar h-[93vh]">
      <h1 className="text-3xl font-bold md:text-4xl text-center p-4">
        Shopping List
      </h1>
      <Link to="/addshoppingcategory">
        <img src="/assets/plus.png" alt="" className="w-8 h-8 mx-auto" />
      </Link>
      <div className="mb-16">
        <ShoppingCategory />
      </div>
    </div>
  );
}

export default Shopping;
