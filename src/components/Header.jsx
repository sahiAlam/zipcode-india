import { Link } from "react-router-dom";
import { IoSearch } from "react-icons/io5";
import { FaBars } from "react-icons/fa";
import { useState } from "react";
import navbarItem from "../data/navbaritem";

const Header = () => {
  const [showSearchInput, setShowSearchInput] = useState(false);
  const [toggleMenuBar, setToggleMenuBar] = useState(false);
  // Toggle search input
  const toggleSearchInput = () => {
    setShowSearchInput(!showSearchInput);
  };

  // Toggle hamburger menu
  const handleToggleMobileMenu = () => {
    setToggleMenuBar(!toggleMenuBar);
  };
  return (
    <>
      <nav className="bg-primaryBlue p-4">
        <div className="flex  justify-between md:w-4/6 mx-auto">
          <div>
            <a href="#">
              <img src="./assets/download.svg" alt="logo-img" />
            </a>
          </div>
          <div className="hidden md:block">
            <ul className="flex ">
              {navbarItem.map((navItem) => (
                <li className="px-[15px]">
                  <a href="#" className="text-white font-normal text-md">
                    {navItem}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex md:none gap-5">
            <IoSearch
              size={20}
              className="text-white cursor-pointer mt-1"
              onClick={toggleSearchInput}
            />
            {showSearchInput && (
              <div className="relative">
                <input
                  type="text"
                  className="absolute right-0 bottom-0 bg outline-none bg-black text-white text-center rounded-sm"
                />
                <IoSearch
                  size={20}
                  className="cursor-pointer mt-1 absolute top-[-25px] text-lightBlack hidden md:block"
                />
              </div>
            )}
            <FaBars
              size={25}
              className="text-white md:hidden cursor-pointer"
              onClick={handleToggleMobileMenu}
            />
          </div>
        </div>

        {/* Mobile Hamburger Menu  */}
        {toggleMenuBar && (
          <div className="block md:hidden">
            <ul className="block mt-8">
              {navbarItem.map((navItem) => (
                <li className="px-[15px] border-b my-1 border-lightDarkBorder p-1 text-center">
                  <a href="#" className="text-white font-normal text-md">
                    {navItem}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </>
  );
};

export default Header;
