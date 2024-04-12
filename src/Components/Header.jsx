import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "/src/assets/logo.svg";
import logout from "/src/assets/logout.svg";
import user from "/src/assets/user.svg";
import Navbar from "./Navbar";
import { MdMenu, MdClose, MdOutlineShoppingCart } from "react-icons/md";
import { ShopContext } from "../Context/ShopContext";

const Header = () => {
  const [menuopened, setOpenedMenu] = useState(false);

  const toggleMenu = () => setOpenedMenu(!menuopened);
  const {getTotalCartItems}=useContext(ShopContext)
  return (
    <div className="fixed top-0 right-0 bg-white left-0 flex justify-between items-center p-4 sm:px-8 px-3 border-b-2 shadow-md z-10  ">
      <Link>
        {/* <img src={logo} width="80" alt="" /> */}
        <h1 className="font-extrabold text-xl lg:text-3xl font-serif">|TRENDZ</h1>
      </Link>
      <Navbar containerStyles={"hidden md:flex gap-x-10  text-lg"} />
      <Navbar
        containerStyles={`${
          menuopened
            ? "flex flex-col gap-y-20 py-24 bg-gray-300  text-xl font-semibold  w-72 h-full  fixed top-[73px]  right-0 items-center  transition-all duration-500 bg-slate-100"
            : "flex flex-col gap-y-20 py-24   w-72 h-full font-semibold fixed top-[73px] -right-[100%] items-center p-12 transition-all duration-500"
        }`}
      />
      <div className="flex items-center">
        {!menuopened ? (
          <MdMenu
            className="md:hidden cursor-pointer hover:text-blue-800 mr-4  h-7 w-7  "
            onClick={toggleMenu}
          />
        ) : (
          <MdClose
            className="md:hidden cursor-pointer hover:text-blue-800 mr-4  h-7 w-7  "
            onClick={toggleMenu}
          />
        )}
        <div className="flex items-center space-x-2">
          <NavLink to="cart-page">
            <a href="#" role="button" class="relative flex">
              <span class="flex-1 w-8 h-8 mt-2" viewbox="0 0 24 24">
                <MdOutlineShoppingCart size={24} className=" rounded-full  " />
              </span>
              <span class="absolute right-0 top-0 rounded-full bg-red-600 w-4 h-4 top right p-0 m-0 text-white font-mono text-sm  leading-tight text-center">
                {getTotalCartItems()}
              </span>
            </a>
          </NavLink>
          {/* <NavLink to="login" className="bg-blue-900 text-white font-bold rounded-lg p-2 flex items-center"><img src={logout} width="25" className="" alt="" />Logout</NavLink> */}
          <NavLink
            to="login"
            className="bg-gray-800 text-white font-bold rounded-lg p-1 px-3 flex items-center"
          >
            <img src={user} width="20" className="" alt="" />
            Login
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Header;
