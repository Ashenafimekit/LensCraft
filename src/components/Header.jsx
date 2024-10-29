import React, { useState } from "react";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex flex-row justify-between items-center py-5 px-10 sm:py-5 sm:px-20 md:py-5 md:px-20 lg:py-5 lg:px-20 font-serif bg-[#232323] text-white sm:w-full">
      <div>
        <h1>
          <Link to="/">
            <h1 className="text-lg md:text-2xl lg:text-3xl font-bold">
              LensCraft
            </h1>
          </Link>
        </h1>
      </div>
      <div className="flex flex-row justify-center items-start gap-5">
        <div className="sm:hidden">
          <button onClick={handleClick}>
            <MenuIcon />
          </button>
        </div>
        <div
          className={`sm:flex sm:space-x-4 ${
            isOpen ? "block" : "hidden"
          } md:flex`}
        >
          <h1 className="hover:font-bold">
            <Link to="/about">About</Link>
          </h1>
          <h1 className="hover:font-bold">
            <Link to="/contact">Contact</Link>
          </h1>
          <h1 className="hover:font-bold">
            <Link to="/gallery">Gallery</Link>
          </h1>
          <h1 className="hover:font-bold">
            <Link to="/service">Service</Link>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Header;
