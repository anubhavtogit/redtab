import React from "react";
import { FaBars } from "react-icons/fa";

const Header = () => {
  return (
    <div className="flex justify-between">
      <div className="flex items-center justify-center gap-3">
        <img
          src="assets\3830976_lined icons_menu_side_side bar_side menu_icon.svg"
          alt="logo"
          width="50px"
          height="50px"
        />
        <button className="bg-gradient-to-r from-orange-400 to-red-400 text-xs text-white px-2 py-1 rounded-2xl">we are hiring</button>
      </div>
      <ul className="hidden lg:flex justify-between items-center font-lato text-gray-400 gap-6">
        <li><a href="#">Plans</a></li>
        <li><a href="#">Timings</a></li>
        <li><a href="#">Why Red_tab</a></li>
      </ul>
      <div className="hidden lg:flex justify-center items-center font-lato gap-6">
        <a className="text-gray-400" href="#">Sign In</a>
        <button className="rounded-md py-3 px-4 bg-blue-400 hover:bg-blue-600 text-white">Join Us</button>
      </div>

      <div className="lg:hidden">
        <FaBars />
      </div>
    </div>
  );
};

export default Header;
