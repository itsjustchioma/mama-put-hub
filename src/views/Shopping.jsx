import ShoppingCategory from "../components/Shopping/ShoppingCategory";
function Shopping() {
  return (
    <div className="overflow-scroll no-scrollbar h-[90vh]">
      <h1 className="font-semibold text-xl md:text-2xl text-center p-4">
        Shopping List
      </h1>
      <ShoppingCategory />
    </div>
  );
}

export default Shopping;
