import React from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import Item from "../Components/Item";
import all_products from '../assets/all_products'

const Category = ({ Category, banner }) => {
  return (
    <section className="p-3 py-12 xl:py-28">
      <div>
        <div>
          <img src={banner} alt="" className="my-7 mx-auto" />
        </div>
        <div className="flex justify-between items-center mx-3 my-7">
          <h5>
            <span className="font-bold">Showing 1-12</span> out of 36 products
          </h5>
          <div className="flex items-center gap-x-3  px-4 border-2 border-gray-800 rounded-3xl py-2">
            Sort by <MdOutlineKeyboardArrowDown />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 mx-11 ">
          {
            all_products.map((item)=>{
              if (Category===item.category){
                return  <Item
                key={item.id}
                id={item.id}
                image={item.image}
                name={item.name}
                new_price={item.new_price}
                old_price={item.old_price}
              />
              }
            })
          }
        </div>
      </div>
      <div  className="mt-16 text-center">
        <button className="rounded-3xl p-2 bg-gray-700 text-white">Load more</button>
      </div>
    </section>
  );
};

export default Category;
