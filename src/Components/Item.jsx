import React from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

const Item = ({ id, name, image, old_price, new_price }) => {
  return (
    <div className="rounded-xl shadow-lg overflow-hidden">
      <div className="relative flex group justify-center items-center overflow-hidden transition-all duration-100 ">
        <Link
          to={`/product/${id}`}
          className="absolute top-1/2 bottom-1/2 h-12 w-12 bg-white flex justify-center items-center rounded-full scale-0  group-hover:scale-100 z-20 transition-all duration-700 "
        >
          <FaSearch className="hover:rotate-90 scale-125 transition-all duration-200" />
        </Link>
        <img
        onClick={window.scrollTo(0,0)}
          src={image}
          alt="productImage"
          className="w-full block object-cover group-hover:scale-110  transition-all duration-1000"
        />
      </div>
      <div className="p-3 ">
        <h4 className="my-1 font-semibold line-clamp-2 text-gray-700">
          {name}
        </h4>
        <div className="flex gap-5">
          <div className="font-bold">${new_price}</div>
          <div className="text-gray-600 line-through">{old_price}</div>
        </div>
      </div>
    </div>
  );
};

export default Item;
