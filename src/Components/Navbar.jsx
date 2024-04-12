import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = ({containerStyles}) => {
  return (
    <nav className={`${containerStyles}`}>
      <NavLink to="/" className={({isActive})=>isActive?"border-b-2 border-blue-900":""}>Home</NavLink>
      <NavLink to="/mens"className={({isActive})=>isActive?"border-b-2 border-blue-900":""}>Men's</NavLink>
      <NavLink to="/womens" className={({isActive})=>isActive?"border-b-2 border-blue-900":""} >Women's</NavLink>
      <NavLink to="/kids" className={({isActive})=>isActive?"border-b-2 border-blue-900":""}>Kid's</NavLink>
    </nav>
  );
};

export default Navbar;
