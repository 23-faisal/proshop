import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaCartArrowDown } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  return (
    <div className="w-full bg-[#2F3645] text-white ">
      <nav className="flex items-center justify-between max-w-6xl mx-auto py-5 ">
        <div>
          <h1 className="text-2xl font-bold ">Proshop</h1>
        </div>
        <div className="flex items-center justify-center gap-6">
          <div className="flex items-center justify-start gap-2 text-slate-300 cursor-pointer hover:text-slate-200 transition ease-in-out duration-75">
            <FaCartArrowDown className="h-5 w-5" />
            <span className="text-lg ">Cart</span>
          </div>
          <div className="flex items-center justify-start gap-2 text-slate-300 cursor-pointer hover:text-slate-200 transition ease-in-out duration-75">
            <CgProfile className="h-5 w-5" />
            <span className="text-lg ">Sign In</span>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
