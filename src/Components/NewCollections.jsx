import React from "react";
import LATEST from "../assets/latest";
import Item from "./Item";

const NewCollections = () => {
  return (
    <section className="bg-white">
      <div className="py-12 p-4 lg:p-20  ">
        <h1 className="text-center text-4xl font-bold">Latest Products</h1>
        <hr className="mb-12 mx-auto bg-gradient-to-l from-transparent via-black to-transparent h-[3px] mt-2" />
        <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 mx-11">
          {LATEST.map((item) => (
            <Item
              key={item.id}
              id={item.id}
              image={item.image}
              name={item.name}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewCollections;
