import React from "react";
import { MdStar, MdOutlineLocalOffer } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { FaStar } from "react-icons/fa";

const Hero = () => {
  return (
    <>
      <div className="relative bg-bg-hero w-full  h-[700px] bg-center bg-cover pb-12  bg-no-repeat mt-10  ">
        <div className="absolute top-36 px-6 lg:pl-20">
          <div>
            <h1 className="text-5xl md:text-5xl text-white md:text-black font-extrabold max-w-[15rem] lg:max-w-[41rem]">
             LET'S  <span className="text-gray-200 ">EXPLORE</span> UNIQUE CLOTHES.
            </h1>
            <p className="mt-10 max-w-[33rem] md:text-2xl text-lg font-semibold text-gray-200 md:text-black">
              Live for influential and innovative fashion!
            </p>
          </div>
          <div className="flex flex-col  justify-start md:items-center gap-y-2 lg:gap-x-3 my-8 md:flex-row">
            <div className="flex gap-x-3">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <div className="font-bold">
              176K <span className="font-normal">Excellent Reviews</span>
            </div>
          </div>
          <div className="flex max-xs:flex-col gap-2">
            <NavLink className="bg-black text-white rounded-xl p-1 px-2">
              Shop now
            </NavLink>
            <NavLink className="flex items-center justify-center text-black bg-white rounded-xl p-1 px-2">
              <MdOutlineLocalOffer />
              Offers
            </NavLink>
          </div>
        </div>
      </div>
      <marquee
        bgcolor="gray"
        className="mt-10 "
        w-screen
        direction="left"
        behavior="scroll"
        scrollamount="12"
        
        
        
      >
        <div className="flex items-center justify-center text-3xl font-bold font- space-x-20 p-4 text-white  ">
          <h1>Buy one,get one free!!</h1>
          <h1>50% off on selected item</h1>
          <h1>Limited time offer: free shipping</h1>
          
        </div>
      </marquee>
      
    </>
  );
};


export default Hero;
